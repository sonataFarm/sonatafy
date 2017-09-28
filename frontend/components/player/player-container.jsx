import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = state => {
  debugger;
  let track;
  const track_id = Object.keys(state.entities.tracks)[0];
  if (track_id) {
    track = state.entities.tracks[track_id];
  } else {
    track = null;
  }
  return { track };
}

export default connect(mapStateToProps)(Player)
