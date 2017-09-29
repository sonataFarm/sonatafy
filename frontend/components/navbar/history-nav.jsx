import React from 'react';
import { withRouter } from 'react-router-dom';

class HistoryNav extends React.Component {
  handleClick() {

  }
  render() {
    return (
      <div className="history-nav-container">
        <i
          className="fa fa-angle-left fa-2x"
          onClick={this.props.history.goBack}></i>
        <i
          className="fa fa-angle-right fa-2x"
          onClick={this.props.history.goForward}></i>
      </div>
    );
  }
}

export default withRouter(HistoryNav);
