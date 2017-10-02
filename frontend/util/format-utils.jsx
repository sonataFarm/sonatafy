import _ from 'lodash';

function padWithZeros(num, int) {
  let numString = int.toString()
  while (numString.length < num)
    numString = '0' + numString;

  return numString;
}

export const formatTime = timeInSeconds => {
  if (isNaN(timeInSeconds)) {
    return '00:00';
  }

  let seconds = Math.floor(timeInSeconds);
  const minutes = Math.floor(Math.floor(seconds) / 60);
  seconds -= minutes * 60;

  return `${padWithZeros(2, minutes)}:${padWithZeros(2, seconds)}`;
}

export const composerFormatShort = fullName => {
  if (!fullName) return '';
  let names = fullName.split(' ');
  names = names.map((name, idx) => {
    if (idx === names.length - 1) {
      return ' ' + name;
    } else {
      return name.toUpperCase()[0] + '.';
    }
  });

  return names.join('');
};

export const ComposerFormat = {
  short: composerFormatShort
};
