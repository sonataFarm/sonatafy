import { connect } from 'react-redux';
import { playSingleTrack } from '../../actions/player-actions';
import SearchBar from './search-bar';

const mapDispatchToProps = dispatch => ({
  playSingleTrack: id => dispatch(playSingleTrack(id))
});

export default connect(null, mapDispatchToProps)(SearchBar);
