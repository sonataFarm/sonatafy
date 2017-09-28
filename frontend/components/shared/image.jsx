import React from 'react';

const Image = ({ url, className }) => (
  <img src={url} className={className ? className : ""}/>
);

export default Image;
