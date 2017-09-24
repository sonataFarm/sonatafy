import { TOGGLE_DEMO_ANIMATION } from '../../actions/ui-actions';

const _static = {
  animating: false
};

const DemoReducer = (state = _static, action) => {
  switch (action.type) {

    case TOGGLE_DEMO_ANIMATION:
      return {
        animating: !state.animating
      }

    default:
      return state;
  }
};

export default DemoReducer;
