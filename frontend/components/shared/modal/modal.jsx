import React from 'react';

const Modal = ({ title, body, footer, id }) => (
  <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">{ title }</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          { body }
        </div>
        <div className="modal-footer">
          { footer }
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
