import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TrackListItem extends React.Component {

  handleClick(e) {
    e.preventDefault();
    const idx = this.props.idx;
    const playlistID = this.props.match.params.playlistID;
    this.props.enqueuePlaylist(playlistID, idx);
  }

  render() {
    const { track, idx } = this.props;
    return (
      <tr className="track-list-row" onClick={this.handleClick.bind(this)}>
        <td>{idx + 1}</td>
        <td>{track.title}</td>
        <td>{Math.ceil((Math.random() * 5))}</td>
      </tr>
    );
  }
};

export default withRouter(TrackListItem);
