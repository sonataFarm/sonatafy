import React from 'react';
import Modal from '../../shared/modal/modal';

const title = "Guest Demo Login";
const body = <div>
  Username:
  Password:
</div>;

const footer = <div>Go!</div>;

const GuestDemoModal = () => (
   <Modal
    id='guest-demo-modal'
    title="Guest Demo Login"
    body={body}
    footer={footer}
  />
);

export default GuestDemoModal;
