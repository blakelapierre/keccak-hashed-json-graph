import { h, Component } from 'preact';
import { Router, route } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Detail from '../routes/detail';
import Profile from '../routes/profile';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

console.log(Detail);

import keccak from '../lib/keccak.js';

const hashFnName = 'keccak';

const hosts = ['localhost:9999', 'db.fact.company'];

const host = window.location.hostname === 'localhost' ? 'localhost:9999' : 'db.fact.company';


const transforms = {
  addData(hash, data, state) {
    const bucket = state.data[hash] = state.data[hash] || [],
          {log} = state;

    for (let i = 0; i < bucket.length; i++)
      if (bucket[i] === data)
        return state;

    bucket.unshift(data);
    log.unshift(hash);

    return state;
  }
};


function storeData(hash, data) {
  console.log('storing', hash);
  return new Promise((resolve, reject) => {
    transforms.addData(hash, data, store);

    resolve();
  });
}

function storeDataOnServer(hash, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', `http://${host}/${hashFnName}/${hash}`, true);
    xhr.send(data);

    xhr.addEventListener('loadend', resolve);
    xhr.addEventListener('error', reject);
  });
}

function storeDataInLocalStorage(hash, data) {
  return new Promise((resolve, reject) => {
    if (localStorage) {
      const bucket = JSON.parse(localStorage[hash] || '[]');

      for (let i = 0; i < bucket.length; i++)
        if (data === bucket[i])
          return resolve();

      bucket.unshift(data);
      resolve();
    }
  });
}

function classify(hash, data) {
  tryClassifyJSON(hash, data, store.jsonReferences);
}

function tryClassifyJSON(hash, data, jsonReferences) {
  console.log('try classify', data, jsonReferences);
  try {
    const object = JSON.parse(data);

    console.log(object);

    if (Array.isArray(object)) {

    }
    else if (typeof object === 'object') {
      for (let key in object) {
        const value = object[key];

        if (typeof value === 'string') {
          const match = value.match(/^keccak:([0-9a-f]{64})$/);
          if (match) {
            console.log('match2', match);
            const [_, referenceHash] = match,
                  referenceHashBucket = (jsonReferences[referenceHash] = jsonReferences[referenceHash] || {}),
                  keyBucket = (referenceHashBucket[key] = referenceHashBucket[key] || []);

            keyBucket.unshift(hash);

            console.log('jsonref', {jsonReferences});
          }
        }
      }
    }
  }
  catch (e) {}
}

const sayPostCount = (
  counts => 
    id => {
      console.log('say', id);
      
      const data = (counts[id] = counts[id] || {count: 0, utterance: new SpeechSynthesisUtterance()});

      if (data.count === 0) {
        window.speechSynthesis.speak(data.utterance);

        data.utterance.addEventListener('start', () => delete counts[id]);
        data.utterance.rate = 1.5;
      }
      
      data.count++;

      data.utterance.text = `${data.count} ${id} post${data.count > 1 ? 's' : ''}`;
      console.log(data.utterance.text);
    }
)({});

const store = {
  hosts,
  transforms,
  data: {},
  log: [],
  jsonReferences: {},
  addData: data =>
    new Promise((resolve, reject) => {
      const hash = keccak(data);

      storeData(hash, data)
        .then(() => storeDataOnServer(hash, data))
        .then(() => storeDataInLocalStorage(hash, data))
        .then(() => classify(hash, data))
        .then(() => resolve({hash, data}));
    }),

  getData: hash =>
    new Promise((resolve, reject) =>
      lookupInStore(store, hash)
        .then(resolve)
        .catch(() =>
          lookupInLocalStorage(hash)
            .then(data => storeData(hash, data).then(() => data))
            .then(resolve)
            .catch(() =>
              lookupInServer(hash)
                .then(data => storeData(hash, data).then(() => data))
                .then(data => {
                  try {
                    const object = JSON.parse(data);

                    console.log('cl', object);
                    if (object['source'] === 'yours.org') sayPostCount('yours.org');
                    if (object['subreddit']) sayPostCount(`subreddit ${object['subreddit']}`);
                    if (object['channel']) sayPostCount(`${channel}`);
                  }
                  catch (e) {

                  }

                  return data;
                })
                .then(resolve)
                .catch(reject)))),

  getReferencesByKey: (hash, key) => get(`http://${host}/${hashFnName}/${hash}/json/${key}`).then(result => JSON.parse(result || '[]')),

  getJsonReferences: hash => get(`http://${host}/${hashFnName}/${hash}/json`).then(result => JSON.parse(result || '{}')).catch(() => ({})),

  getLatest: () => get(`http://${host}/${hashFnName}/latest`).then(latest => latest.split('\n')),

  getSubscribeLatest: (callback, token = {}) => stream(`http://${host}/${hashFnName}/subscribe/latest`, (data, state) => callback(data.split('\n')), token),

  // getSubscribeJsonKey: (key, callback) => stream(`http://${host}/${hashFnName}/subscribe/json/${key}`, (data, state) => callback(data.split('\n')))

  getSubscribeJsonKey: (key, callback, token = {}) => {
    const url = `http://${host}/${hashFnName}/subscribe/json/${key}`,
          promise = store.pendingGetSubscribeJsonKey[key];

    console.log('subscribing', url, promise);

    if (promise) return promise;

    return (store.pendingGetSubscribeJsonKey[key] = new Promise((resolve, reject) => {
      stream(url, data => callback(data.split('\n')), token)
        .then(response => {
          console.log('stream done', response);
          delete store.pendingGetSubscribeJsonKey[key];
          resolve(response);
        })
        .catch(error => {
          console.log('stream error', error);
          delete store.pendingGetSubscribeJsonKey[key];
          reject(error);
        });
    }));
  },

  pendingGetSubscribeJsonKey: {},

  getSubscribeJsonKeyValue: (key, value, callback, token = {}) => {
    const url = `http://${host}/${hashFnName}/subscribe/json/${key}/${value}`,
          promise = (store.pendingGetSubscribeJsonKeyValue[key] = store.pendingGetSubscribeJsonKeyValue[key] || {})[value];

    console.log('subscribing', url, promise);

    if (promise) return promise;

    return (store.pendingGetSubscribeJsonKeyValue[key][value] = new Promise((resolve, reject) => {
      stream(url, data => callback(data.split('\n')), token)
        .then(response => {
          console.log('stream done', response);
          delete store.pendingGetSubscribeJsonKeyValue[key][value];
          resolve(response);
        })
        .catch(error => {
          console.log('stream error', error);
          delete store.pendingGetSubscribeJsonKeyValue[key][value];
          reject(error);
        });
    }));
  },

  pendingGetSubscribeJsonKeyValue: {}
};

function lookupInStore(store, hash) {
  return new Promise((resolve, reject) => {
    const bucket = store.data[hash];

    if (bucket) resolve(bucket[0]);
    reject();
  });
}

function lookupInLocalStorage(hash) {
  return new Promise((resolve, reject) => {
    if (!localStorage) reject();

    const bucket = localStorage[hash];

    if (bucket) resolve(JSON.parse(bucket)[0]);
    else reject();
  });
}

function lookupInServer(hash) {
  console.log('lookup', hash);
  return get(`http://${host}/${hashFnName}/${hash}`);
}


function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.addEventListener('load', () => xhr.status === 200 ? resolve(xhr.responseText) : reject(xhr.status.toString()));
    xhr.addEventListener('error', reject);
    xhr.addEventListener('timeout', reject);
    xhr.send();
  });
}

function stream(url, callback, token = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    let position = 0;
    xhr.open('GET', url);
    xhr.addEventListener('readystatechange', event => {

      const newText = event.target.responseText.substring(position);
      position += newText.length;

      callback(newText);
    });
    xhr.addEventListener('loadend', resolve);
    xhr.addEventListener('error', reject);
    xhr.addEventListener('timeout', reject);

    token.cancel = () => {
      console.log('canceling', url);
      token.canceled = true;
      xhr.abort();
    };

    token.canceled = false;

    xhr.send();
  });
}

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    const props = {
      store,
      route,
      hashFnName,
      settings: {colorHash: true}
    };

    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" {...props} />
          <Detail path={`/${props.hashFnName}/:hash`} {...props} />
        </Router>
      </div>
    );
  }
}
