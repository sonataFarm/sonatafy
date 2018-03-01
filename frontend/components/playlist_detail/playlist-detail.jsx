import React from 'react';
import { fetchSinglePlaylist } from '../../actions/playlist-actions';
import PlaylistDetailHeader from './playlist-detail-header';
import TrackListContainer from '../shared/track_list/track-list-container';
import LoadingIcon from '../shared/loading';

class PlaylistDetail extends React.Component {
  componentWillMount() {
    const id = parseInt(this.props.match.params.playlistID);
    this.props.fetchSinglePlaylist(id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.playlistID !== this.props.match.params.playlistID) {
      const id = parseInt(newProps.match.params.playlistID)
      this.props.fetchSinglePlaylist(id);
    }
  }

  render() {
    if (this.props.loading) {
      return <LoadingIcon />;
    } else {
      return (
        <div className="playlist-detail">
          <PlaylistDetailHeader playlist={ this.props.playlist }/>
          <TrackListContainer tracks={this.props.tracks} playlist={ this.props.playlist }/>
        </div>
      );
    }
  }
}

export default PlaylistDetail;
