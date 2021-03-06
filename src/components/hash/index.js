import style from './style';
import { Link } from 'preact-router/match';

const Hash = props => props.settings.colorHash ? <ColorHash {...props} /> : <hash>{props.hash}</hash>;

const ColorHash = ({hash, hashFnName, route}) => (
  <color-hash title={hash} onClick={() => route(`/${hashFnName}/${hash}`)} >
    {hash.match(/[0-9a-f]{8}/g).map(portion => (<span style={`background-color: rgba(${parseInt(portion.substring(0, 2), 16)}, ${parseInt(portion.substring(2, 4), 16)}, ${parseInt(portion.substring(4, 6), 16)}, ${parseInt(portion.substring(6, 8), 16) / 255 / 2 + 0.3});`}>{portion}</span>))}
  </color-hash>
);

export {Hash, ColorHash};