import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../shared/image';


const PlaylistDetailHeader = ({ playlist }) => (
  <div className="row playlist-detail-header-wrapper">
    <div className="content-area col-6">
      <Image url={ playlist.img_url } />
    </div>
    <div className="content-area col-6 info-box">
      <span className="playlist-detail-header">Playlist</span>
      <div className="playlist-detail-title">{ playlist.title }</div>
      <div className="playlist-detail-user">
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
