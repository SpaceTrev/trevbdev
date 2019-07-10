import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
// import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import './css/style.css'

class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="body">
        <div>
          <Navbar id="dashboard" color="dark" dark expand="md">
            <NavbarBrand className="text-white">Deep Space</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="menu" navbar>
                <NavItem className="my-2 mx-1">
                <NavLink className="navlink" target="_blank" href="https://github.com/spacetrev">
                <FontAwesomeIcon size="lg" className="iconz" icon={faGithub} />
                  </NavLink>
                </NavItem>
                <NavItem className="my-2 mx-1">
                <NavLink className="navlink" target="_blank" href="https://linkedin.com/in/spacetrev">
                <FontAwesomeIcon size="lg" className="iconz" icon={faLinkedinIn} />
                  </NavLink>
                </NavItem>
           
              </Nav>
            </Collapse>
          </Navbar>
        </div>
 
      </div>
    );
  }
}

export default TopNav;
