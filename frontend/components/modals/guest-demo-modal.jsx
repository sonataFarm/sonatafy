import React from 'react';
import Modal from '../shared/modal';
import DemoFormContainer from '../forms/demo-form-container';
import { closeModal } from '../../util/modal-utils';

const body = <div>
  Username:
  Password:
</div>;

const GuestDemoModal = () => (
  <Modal
    id='guest-demo-modal'
    title="Guest Demo Login"
    body={<DemoFormContainer />}
  />
);

export default GuestDemoModal;
