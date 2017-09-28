import React from 'react';
import TrackListItem from './track-list-item';

class TrackList extends React.Component {
  render() {
    const { tracks } = this.props;
    const trackListItems = tracks.map(
      (track, idx) => <TrackListItem key={idx} ord={idx + 1} track={track} />
    );

    return (
      <div className="track-list-wrapper">
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
}

export default TrackList;
