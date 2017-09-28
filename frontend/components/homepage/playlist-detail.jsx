import React from 'react';
import PlaylistDetailHeader from './playlist-detail-header';
import TrackList from './track-list';
import { fetchSinglePlaylist } from '../../actions/playlist-actions';
import LoadingIcon from '../shared/loading';

class PlaylistDetail extends React.Component {
  componentWillMount() {
    const id = parseInt(this.props.match.params.id);
    this.props.fetchSinglePlaylist(id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      const id = parseInt(newProps.match.params.id)
      this.props.fetchSinglePlaylist(id);
    }
  }

  render() {
    if (this.props.loading) {
      return <LoadingIcon />
    } else {
      return (
        <div>
          <PlaylistDetailHeader playlist={ this.props.playlist }/>
          <TrackList tracks={this.props.tracks}/>
        </div>
      );
    }
  }
}

export default PlaylistDetail;
