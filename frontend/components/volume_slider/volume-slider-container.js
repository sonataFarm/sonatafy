import { connect } from 'react-redux';
import VolumeSlider from './volume-slider';
import { setVolume } from '../../actions/player-actions';

const mapStateToProps = state => ({
  volume: state.ui.player.volume
});

const mapDispatchToProps = dispatch => ({
  setVolume: volume => dispatch(setVolume(volume))
})

export default connect(mapStateToProps, mapDispatchToProps)(VolumeSlider);
