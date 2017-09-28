import React from 'react';
import { Link } from 'react-router-dom';

const TrackListItem = ({ track, ord }) => (
    <tr className="track-list-row">
      <td>{ord}</td>
      <td>{track.title}</td>
      <td>{Math.ceil((Math.random() * 5))}</td>
    </tr>
);

export default TrackListItem;
