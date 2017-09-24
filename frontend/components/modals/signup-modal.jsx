import React from 'react';
import Modal from '../shared/modal';
import SignupFormContainer from '../forms/signup-form-container';

const SignupModal = () => (
  <Modal
    id="signup-modal"
    title="Sign up"
    body={<SignupFormContainer />}
  />
);

export default SignupModal;
