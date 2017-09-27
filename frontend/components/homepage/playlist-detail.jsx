import React from 'react';
import PlaylistDetailHeader from './playlist-detail-header';
import TrackList from './track-list';
import { fetchSinglePlaylist } from '../../actions/playlist-actions';
import LoadingIcon from '../shared/loading';

class PlaylistDetail extends React.Component {
  componentWillMount() {
    debugger;
    this.props.fetchSinglePlaylist(this.props.match.params.id)
  }

  render() {
    if (this.props.loading) {
      return <LoadingIcon />
    } else {
      return (
        <div>
          <PlaylistDetailHeader playlist={ this.props.playlist }/>
          <TrackList />
        </div>
      );
    }
  }
}

export default PlaylistDetail;
