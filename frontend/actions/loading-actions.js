import _ from 'lodash';

export const TOGGLE_LOADING_THROTTLE = 'TOGGLE_LOADING_THROTTLE';

// minimum time to display loading animation
export const LOADING_THROTTLE_DURATION = _.random(750, 1300);

export const toggleLoadingThrottle = () => ({
  type: TOGGLE_LOADING_THROTTLE
});

export const startLoadingThrottle = () => dispatch => {
  dispatch(toggleLoadingThrottle());
  setTimeout(() => dispatch(toggleLoadingThrottle()), LOADING_THROTTLE_DURATION);
};
