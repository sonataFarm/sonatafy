/* followedUsers:
  -id
  -username
  -email
*/

import { connect } from 'react-redux';
import { selectFollowedUsers } from '../../selectors/selectors';
import RightSidebar from './right-sidebar';

const mapStateToProps = state => ({
  followedUsers: selectFollowedUsers(state)
});

export default connect(mapStateToProps)(RightSidebar);
