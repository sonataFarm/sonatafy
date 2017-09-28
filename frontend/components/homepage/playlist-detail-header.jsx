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

"https://image.ibb.co/gOXU15/1.jpg",
"https://image.ibb.co/fVJ2M5/2.jpg",
"https://image.ibb.co/fc4bg5/3.jpg",
"https://image.ibb.co/iUKnok/4.jpg",
"https://image.ibb.co/hh4bg5/5.jpg",
"https://image.ibb.co/jYa4ZQ/6.jpg",
"https://image.ibb.co/dcgNM5/7.jpg",
"https://image.ibb.co/kpZbg5/8.jpg"
