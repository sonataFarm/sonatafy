import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ComposerFormat } from '../../util/format-utils';

class TrackListItem extends React.Component {

  handleClick(e) {
    e.preventDefault();
    const idx = this.props.idx;
    const playlistID = this.props.match.params.playlistID;
    this.props.enqueuePlaylist(playlistID, idx);
  }

  handleMouseEnter(e) {
    $(e.currentTarget.children[0]).addClass('hover');
    $(e.currentTarget.children[0]).removeClass('no-hover');
  }

  handleMouseLeave(e) {
    $(e.currentTarget.children[0]).removeClass('hover');
    $(e.currentTarget.children[0]).addClass('no-hover');
  }

  render() {
    const { track, idx, currentTrack } = this.props;
    const composer = ComposerFormat.short(track.composer);

    return (
      <tr
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.handleClick.bind(this)}
        className="track-list-row"
        >
        {track.id === currentTrack.id ? (
          <td className="no-hover playing">
            <i className="fa fa-play-circle fa-lg"></i>
          </td>
        ) : (
          <td className="no-hover">
            <span>{idx + 1}</span>
            <i className="hover fa fa-play-circle fa-lg"></i>
          </td>
        )}
        <td><span>{track.title}</span><span>{composer}</span></td>
        <td>{Math.ceil((Math.random() * 5))}</td>
      </tr>
    );
  }
};

export default withRouter(TrackListItem);
