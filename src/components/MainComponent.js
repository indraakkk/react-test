import React, {Component} from 'react';
import Home from './HeaderSlide'
import Profile from '../pages/Profile'
import Coffee from '../pages/Coffee'
import Glass from '../pages/Profile'
import Saucer from '../pages/Profile'
import Footers from './Footers'
import RandomUser from '../rest-api/View'
import './MainComponent.css'
import{
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import{
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom'

export default class NavbarTop extends Component{
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
        }
  }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen 
    })
  }
    render() {
      return (
      <BrowserRouter>
        <div>
          {/* navbar section/header */}
          <Navbar color='dark' light expand='md'>
            <NavbarBrand className='text-light brandfonts' tag={Link} to='/'>Indra ReactJs</NavbarBrand>
            <NavbarToggler className='bg-light' onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink className='text-light brandfonts' tag={Link} to='/profile'>Profile</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className='text-light brandfonts' nav caret>Portfolio</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink tag={Link} to='/coffee'>Coffee</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to='/glass'>Glass</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to='/saucer'>Saucer</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink tag={Link} to='/randomuser'>Random User</NavLink>
                      </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/coffee' component={Coffee} />
          <Route path='/glass' component={Glass} />
          <Route path='/saucer' component={Saucer} />
          <Route path='/randomuser' component={RandomUser} />

          {/* footer section */}
          <Footers />
        </div>
      </BrowserRouter>
    )
  }
}