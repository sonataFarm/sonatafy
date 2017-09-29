import { connect } from 'react-redux';
import { startLoadingCurrentTrack, play } from '../../actions/player-actions';
import Player from './player';

const mapStateToProps = state => ({
  player: state.ui.player,
  playing: state.ui.player.currentTrack.status === 'PLAYING'
})

const mapDispatchToProps = dispatch => ({
  startLoadingCurrentTrack: () => dispatch(startLoadingCurrentTrack()),
  play: () => dispatch(play())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player)
