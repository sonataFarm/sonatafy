import React from 'react';
import Image from './image';
import { gravatarURL } from '../../util/gravatar-utils';

const Avatar = ({ email, size }) => (
  // size is image size in pixels -
  // defaults to 80 if undefined
  <div className="avatar">
    <Image url={gravatarURL(email, size)} />
  </div>
);

export default Avatar;
