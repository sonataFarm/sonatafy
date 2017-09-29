import React from 'react';
import Image from './image';
import { gravatarURL } from '../../util/gravatar-utils';

const Avatar = ({ email }) => (
  <div className="avatar">
    <Image url={gravatarURL(email)} />
  </div>
);

export default Avatar;
