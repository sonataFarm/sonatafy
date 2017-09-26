import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  render() {
    return (
      <div className="modal fade in" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{ this.props.title }</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              { this.props.body }
            </div>
            {this.props.footer && (
              <div className="modal-footer">
                { this.props.footer }
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  toggleOpen() {
    this.setState()
  }
}

export default Modal;
