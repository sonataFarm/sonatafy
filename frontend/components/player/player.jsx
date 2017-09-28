import React from 'react';
import { Howl } from 'howler';

class Player extends React.Component {

  render() {
    if (this.props.track) {
      let sound = new Howl({
        src: "https://sonatify-dev.s3-us-west-1.amazonaws.com/bach-1.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI6UNMMSML7TSK2YA%2F20170928%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20170928T205932Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=744a071c82bb60adeeeaf5e68ce7cd781d33326049319e99501bd56b97f5a020"
      });

      sound.play();
    }
    return (
      <div className="player-container">
        Yo!
      </div>
    )
  }
}

export default Player;
