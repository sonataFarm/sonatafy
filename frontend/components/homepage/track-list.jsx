import React from 'react';
import TrackListItem from './track-list-item';

class TrackList extends React.Component {
  render() {
    const { tracks } = this.props;
    const trackListItems = tracks.map(
      (track, idx) => <TrackListItem key={idx} track={track} />
    );

    return (
      <table className="table table-inverse track-list">
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
    )
  }
}

export default TrackList;
