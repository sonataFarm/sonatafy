import React from 'react';
import { formatTime } from '../../util/time-format-utils'

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      secondsElapsed: 0
    };

    this.updateTime = this.updateTime.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.howl) {
      let duration = newProps.howl.duration();

      let secondsElapsed;
      try { secondsElapsed = newProps.howl.seek(); }
      catch(e) { secondsElapsed = 0; }

      this.setState({
        duration,
        secondsElapsed
      });

      this.interval = setInterval(this.updateTime, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime() {
    this.setState({
      duration: this.props.howl.duration(),
      secondsElapsed: this.props.howl.seek()
    });
  }

  render() {
    return (
      <div className="progress-bar-container">
        <div className="timestamps-container">
          <span>{formatTime(this.state.secondsElapsed)}</span>
          <span>{formatTime(this.state.duration)}</span>
        </div>
        <div className="progress-bar"></div>
      </div>
    );
  }
}

export default ProgressBar;
