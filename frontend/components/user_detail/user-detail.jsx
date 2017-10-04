import React from 'react';
import { withRouter } from 'react-router-dom';
import UserDetailHeader from './user-detail-header';
import PlaylistList from './playlist-list';
import LoadingIcon from '../shared/loading';

class UserDetail extends React.Component {
  componentDidMount() {
    const userID = this.props.match.params.userID || this.props.currentUser.id;
    this.props.fetchSingleUser(userID);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.userID !== this.props.match.params.userID) {
      const userID = nextProps.match.params.userID || this.props.currentUser.id;
      this.props.fetchSingleUser(userID);
    }
  }

  render() {
    const { loading, user, playlists, currentUser } = this.props;

    if (loading) {
      return <LoadingIcon />
    }

    return (
      <div className="user-detail-container scroll scroll-bar">
        <UserDetailHeader user={ user } isCurrentUser={ user.id === currentUser.id } />
        <PlaylistList playlists={ playlists } />
      </div>
    );
  }
}

export default withRouter(UserDetail);
