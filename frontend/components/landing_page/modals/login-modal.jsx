import React from 'react';
import Modal from '../../shared/modal/modal';
import LoginFormContainer from '../../shared/form/login-form-container';

const LoginModal = () => (
  <Modal
    id="login-modal"
    title="Log In"
    body={<LoginFormContainer />}/>
);

export default LoginModal;
