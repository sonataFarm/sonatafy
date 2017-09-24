import React from 'react';
import Brand from './brand';
import Menu from './menu';

const Masthead = () => (
  <div className="masthead clearfix">
    <div className="inner">
      <Brand />
      <Menu />
    </div>
  </div>
)

export default Masthead;
