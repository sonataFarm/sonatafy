import React from 'react';
import { Link } from 'react-router-dom';

const TrackListItem = ({ track, key: index }) => (
    <tr>
      <th scope="row">{index}</th>
      <td>{track.title}</td>
      <td>{Math.ceil((Math.random() * 5))}</td>
    </tr>
);

export default TrackListItem;
