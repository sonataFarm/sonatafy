import React from 'react';
import DropdownMenu from 'react-dd-menu';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  close() {
    this.setState({ open: false });
  }

  render() {

    const menuTrigger = (
      <div onClick={this.toggle}>
        <i className="fa fa-angle-down fa-2x"></i>
      </div>
    );

    const menuItems =
      <li><button type="button" onClick={this.props.logout} style={{cursor: 'pointer'}}>Log Out</button></li>;

      const options = {
        isOpen: this.state.open,
        close: this.close,
        toggle: menuTrigger,
        align: 'right',
        inverse: true,
        animate: true,
        enterTimeout: 350,
        closeOnOutsideClick: true
      };

    return (
      <DropdownMenu { ...options }>
        {menuItems}
      </DropdownMenu>
    );
  }
}

export default DropDownMenu;
