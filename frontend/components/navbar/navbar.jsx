import React from 'react';
import HistoryNav from './history-nav';
import SearchBarContainer from './search-bar-container';
import VisitorNav from './visitor-nav';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="group">
          <HistoryNav />
          <SearchBarContainer />
        </div>
        <VisitorNav logout={this.props.logout} visitor={this.props.currentUser} />
      </div>
    );
  }
}

export default Navbar;
