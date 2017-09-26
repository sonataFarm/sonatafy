import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.logout}>Log Out </button>;
  }
}

export default Navbar;
