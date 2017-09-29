import { connect } from 'react-redux';
import PlayerControls from './player-controls';
import { play, pause, playPreviousTrack, playNextTrack } from '../../actions/player-actions';

const mapStateToProps = state => ({
  currentTrack: state.ui.player.currentTrack
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  playPreviousTrack: () => dispatch(playPreviousTrack()),
  playNextTrack: () => dispatch(playNextTrack())
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerControls)
