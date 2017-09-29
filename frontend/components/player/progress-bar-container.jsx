import { connect } from 'react-redux';
import { seek } from '../../actions/player-actions';

const mapDispatchToProps = dispatch => ({
  seek: () => dispatch(seek)
})

export default connect(null, mapDispatchToProps)(ProgressBar);
