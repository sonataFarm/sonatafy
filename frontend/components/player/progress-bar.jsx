import React from 'react';
import { formatTime } from '../../util/format-utils'

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      secondsElapsed: 0
    };

    this.progress = this.progress.bind(this);
  }

  handleClick(e) {
    this.props.seek(e);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.howl) {
      let duration = newProps.howl.duration();
      let secondsElapsed;

      try { secondsElapsed = newProps.howl.seek(); }
      catch (e) { secondsElapsed = 0; }

      this.setState({
        duration,
        secondsElapsed
      });

      this.interval = setInterval(this.progress, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  progress() {
    const duration = this.props.howl.duration();
    const secondsElapsed = this.props.howl.seek();

    let progressRatio = secondsElapsed / duration;
    progressRatio = isNaN(progressRatio) ? 0 : progressRatio;

    this.setState({
      duration,
      secondsElapsed,
      progressRatio
    });
  }

  render() {
    let{ secondsElapsed, duration, progressRatio } = this.state;
    return (
      <div className="progress-bar-container">
        <div className="timestamps-container">
          <span>{formatTime(secondsElapsed)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="progress-bar" onClick={this.handleClick.bind(this)}>
          <div
            className="progress-bar-played"
            style={{width: `${progressRatio * 100}%`}}></div>
          <div className="progress-bar-unplayed"
            style={{width: `${(1 - progressRatio) * 100}%`}}></div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
