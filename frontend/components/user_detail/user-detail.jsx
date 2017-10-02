import React from 'react';
import { withRouter } from 'react-router-dom';
import UserDetailHeader from './user-detail-header';
import PlaylistList from './playlist-list';
import LoadingIcon from '../shared/loading';

class UserDetail extends React.Component {
  componentDidMount() {
    this.props.fetchSingleUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.userID !== this.props.match.params.userID) {
      this.props.fetchSingleUser();
    }
  }

  render() {
    const { loading, user, playlists } = this.props;

    if (loading) {
      return <LoadingIcon />
    }

    if (!user || !playlists) {
      return null;
    }

    return (
      <div className="user-detail-container scroll scroll-bar">
        <UserDetailHeader user={ user } />
        <PlaylistList playlists={playlists} />
      </div>
    );
  }
}

export default withRouter(UserDetail);
