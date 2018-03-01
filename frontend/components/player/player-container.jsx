import { connect } from 'react-redux';
import { startLoadingCurrentTrack, play, setVolume } from '../../actions/player-actions';
import Player from './player';

const mapStateToProps = state => ({
  player: state.ui.player,
  playing: state.ui.player.currentTrack.status === 'PLAYING',
  volume: state.ui.player.volume
})

const mapDispatchToProps = dispatch => ({
  startLoadingCurrentTrack: () => dispatch(startLoadingCurrentTrack()),
  play: () => dispatch(play()),
  setVolume: volume => dispatch(setVolume(volume))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player)
