import React from 'react';
import Modal from '../shared/modal';
import DemoForm from '../forms/demo-form';

const body = <div>
  Username:
  Password:
</div>;

const footer = <div>Go!</div>;

const GuestDemoModal = () => (
   <Modal
    id='guest-demo-modal'
    title="Guest Demo Login"
    body={<DemoForm />}
  />
);

export default GuestDemoModal;
