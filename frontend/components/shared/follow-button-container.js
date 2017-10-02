import { connect } from 'react-redux';
import FollowButton from './follow-button';
import { createFollow, destroyFollow } from '../../actions/follow-actions';

const mapStateToProps = (state, ownProps) => ({
  followed: state.session.currentUser.followedUsers.includes(ownProps.user.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createFollow: () => dispatch(createFollow(ownProps.user.id)),
  destroyFollow: () => dispatch(destroyFollow(ownProps.user.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
