import React from 'react';
import Modal from '../shared/modal';
import LoginFormContainer from '../forms/login-form-container';

const LoginModal = () => (
  <Modal
    id="login-modal"
    title="Log In"
    body={<LoginFormContainer />}/>
);

export default LoginModal;
