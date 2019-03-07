import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse,  Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";

class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
   <div className="fixed-top">
      <Navbar fixed color="blue" dark expand="md">
          <NavbarBrand>
           <NavLink className="white-text" to='/'>Voucher Management System</NavLink>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
          >
            <NavbarNav right>
              <NavItem >
                <NavLink to="/administration">Administration</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/reporting">Reporting</NavLink>
              </NavItem>
              
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline">About us</div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#!">About The System</DropdownItem>
                    <DropdownItem href="#!">Privacy Policy</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline">Account</div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#!">Profile</DropdownItem>
                    <DropdownItem href="/logout">Logout</DropdownItem> 
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            
              
            </NavbarNav>
            
          </Collapse>
      </Navbar>
      
      </div>
    );
  }
}

export default Header;