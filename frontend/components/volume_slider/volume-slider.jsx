import React from 'react';
import { VolumeSlider as Slider } from 'react-player-controls';

const VolumeSlider = ({ volume, setVolume }) => {

  const transformBlue = multiplier => {
    const baseRGB = [0, 123, 255];
    const transformedRGB = baseRGB.map(
      hue => Math.floor(hue * multiplier)
    );

    return `RGB(${transformedRGB.join(', ')})`
  }

  const handleVolumeChange = volume => {
    $('.VolumeSlider-value').css({background: transformBlue(volume)});
    setVolume(volume);
  }

  return (
    <Slider
      isEnabled={true}
      volume={volume}
      onVolumeChange={ handleVolumeChange }
    />
  )
}

export default VolumeSlider;
