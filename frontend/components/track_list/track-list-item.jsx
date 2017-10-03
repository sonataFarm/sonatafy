import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ComposerFormat, formatTime } from '../../util/format-utils';
import AddTrackDropdownContainer from '../add_track_dropdown/add-track-dropdown-container';
import _ from 'lodash';

class TrackListItem extends React.Component {

  handleRowClick(e) {
    e.preventDefault();
    const idx = this.props.idx;
    const playlistID = this.props.match.params.playlistID;
    this.props.enqueuePlaylist(playlistID, idx);
  }

  handleRemoveTrackFromPlaylist(e) {
    e.stopPropagation();
    this.props.removeTrackFromPlaylist(
      this.props.match.params.playlistID,
      this.props.idx + 1
    )
  }

  handleMouseEnter(e) {
    $(e.currentTarget.children[0]).addClass('hovering');
    $(e.currentTarget.children[2]).addClass('hovering');
  }

  handleMouseLeave(e) {
    $(e.currentTarget.children[0]).removeClass('hovering');
    $(e.currentTarget.children[2]).removeClass('hovering');
  }

  render() {
    const { track, idx, currentTrack } = this.props;
    const composer = ComposerFormat.short(track.composer);

    return (
      <tr
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.handleRowClick.bind(this)}
        className="track-list-row"
        >
        {track.id === currentTrack.id ? (
          <td className="playing">
            <i className="fa fa-play-circle fa-lg"></i>
          </td>
        ) : (
          <td className="hoverable">
            <span>{idx + 1}</span>
            <i className="hidden fa fa-play-circle fa-lg"></i>
          </td>
        )}
        <td><span>{track.title}</span>{'  '}<span>{composer}</span></td>
        <td className="hoverable">
          <span>{formatTime(_.random(180, 800))}</span>
          { this.props.trackIsMemberOfCurrentUsersPlaylist ? (
            <i
              className="hidden fa fa-minus-circle fa-lg"
              onClick={this.handleRemoveTrackFromPlaylist.bind(this)}></i>
          ) : (
            <AddTrackDropdownContainer track={track} />
          )}
        </td>
      </tr>
    );
  }
};

export default withRouter(TrackListItem);
