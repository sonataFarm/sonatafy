import { connect } from 'react-redux';
import PlayerControls from './player-controls';
import { play, pause } from '../../actions/player-actions';

const mapStateToProps = state => ({
  currentTrack: state.ui.player.currentTrack
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayerControls)
