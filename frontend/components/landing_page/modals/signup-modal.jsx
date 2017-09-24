import React from 'react';
import Modal from '../../shared/modal/modal';
import SignupFormContainer from '../../shared/form/signup-form-container';

const SignupModal = () => (
  <Modal
    id="signup-modal"
    title="Sign up"
    body={<SignupFormContainer />}
  />
);

export default SignupModal;
