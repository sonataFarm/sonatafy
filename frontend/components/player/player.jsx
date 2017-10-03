import React from 'react';
import ReactHowler from 'react-howler';
import PlayerLeft from './player-left';
import PlayerMain from './player-main';
import PlayerRight from './player-right';

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.loadTrack = this.loadTrack.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.volume !== this.props.volume) {
      this.howl.volume(nextProps.volume);
    }
  }

  loadTrack(currentTrack) {
    this.props.startLoadingCurrentTrack();
    const trackID = currentTrack.id;
    this.howl && this.howl.stop();

    this.howl = new Howl({
      src: [currentTrack.url],
      html5: true,
      preload: true,
      autoplay: true,
      onload: this.props.play,
      volume
    });
  }

  render() {
    const { currentTrack } = this.props.player;

    return (
      <div className="player-container row">
        <PlayerLeft currentTrack={currentTrack} howl={this.howl} />
        <PlayerMain player={this.props.player} howl={this.howl} />
        <PlayerRight howl={this.howl}/>
        <ReactHowler
          src={[currentTrack ? currentTrack.url : '']}
          playing={this.props.playing}
          ref={ref => (this.howl = ref)}
          html5={true}
          preload={true}
        />
      </div>
    )
  }
}

export default Player;
