import React from 'react';
import TrackListItem from './track-list-item';

class TrackList extends React.Component {

  render() {
    const {
      tracks, enqueuePlaylist, currentTrack,
      trackListBelongsToCurrentUser, removeTrackFromPlaylist
    } = this.props;

    const trackListItems = tracks.map(
      (track, idx) =>
      <TrackListItem
        enqueuePlaylist={enqueuePlaylist}
        currentTrack={currentTrack}
        key={idx}
        idx={idx}
        track={track}
        trackIsMemberOfCurrentUsersPlaylist={trackListBelongsToCurrentUser}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
      />
    );
    return (
      <div className="row scroll-wrapper scrollbar track-list-container">
        <table className="table table-inverse track-list table-hover">
          <thead className="category-header">
            <tr>
              <th className="category-header">#</th>
              <th>Title</th>
              <th><i className="fa fa-clock-o fa-lg" /></th>
            </tr>
          </thead>
          <tbody>
            {trackListItems}
          </tbody>
        </table>
      </div>
    )
  }

  handleClick(e) {
    startIdx = e.currentTarget.ord - 1;
    this.props.enqueuePlaylist(
      this.props.playlist,
      startIdx
    );
  }
}

export default TrackList;
