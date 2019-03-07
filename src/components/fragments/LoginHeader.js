import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse,  Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";

class LoginHeader extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
   <div className="fixed-top">
      <Navbar fixed color="blue" dark expand="md">
          <NavbarBrand>
           <NavLink className="white-text" to='/login'>Voucher Management System</NavLink>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
         
      </Navbar>
      </div>
    );
  }
}

export default LoginHeader;