import React from 'react';
import { fetchSinglePlaylist } from '../../actions/playlist-actions';
import PlaylistDetailHeader from './playlist-detail-header';
import TrackListContainer from '../track_list/track-list-container';
import LoadingIcon from '../shared/loading';

class PlaylistDetail extends React.Component {
  componentWillMount() {
    const id = parseInt(this.props.match.params.playlistID);
    this.props.fetchSinglePlaylist(id);
    debugger;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.playlistID !== this.props.match.params.playlistID) {
      const id = parseInt(newProps.match.params.playlistID)
      this.props.fetchSinglePlaylist(id);
    }
  }

  render() {
    debugger;
    // if (this.props.loading) {
      return <LoadingIcon />
    } else {
      return (
        <div className="playlist-detail">
          <PlaylistDetailHeader playlist={ this.props.playlist }/>
          <TrackListContainer tracks={this.props.tracks} />
        </div>
      );
    }
  }
}

export default PlaylistDetail;
