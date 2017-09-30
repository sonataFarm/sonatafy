import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../shared/thumbnail';


const PlaylistDetailHeader = ({ playlist }) => (
  <div className="row row-margin playlist-detail-header-container">
    <div className="content-area">
      <Thumbnail url={ playlist.img_url } />
    </div>
    <div className="content-area info-box">
      <span className="playlist-detail-header category-header">Playlist</span>
      <div className="playlist-detail-title">{ playlist.title }</div>
      <div className="playlist-detail-user category-header">
        Created by: <Link
          to={`/users/${playlist.author.id}`}
        >
          { playlist.author.username }
        </Link>
      </div>
    </div>
  </div>
);

export default PlaylistDetailHeader;
