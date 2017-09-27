import React from 'react';
import { Link } from 'react-router-dom';

const TrackListItem = ({ track }) => (
  <Link
    className="track-list-item list-group-item list-group-item-action"
    to="#">
    {track.title}
  </Link>
);

export default TrackListItem;
