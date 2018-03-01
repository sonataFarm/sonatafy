import _ from 'lodash';

export const TOGGLE_LOADING_THROTTLE = 'TOGGLE_LOADING_THROTTLE';

// minimum time to display loading animation, in ms
export const LOADING_THROTTLE_DURATION = 1500;

export const toggleLoadingThrottle = () => ({
  type: TOGGLE_LOADING_THROTTLE
});

export const startLoadingThrottle = () => dispatch => {
  dispatch(toggleLoadingThrottle());

  return setTimeout(() => dispatch(toggleLoadingThrottle()), LOADING_THROTTLE_DURATION);
};
