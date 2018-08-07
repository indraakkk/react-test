import React, {Component} from 'react';
import Home from '../components/HeaderSlide'
import Profile from '../pages/Profile'
import Coffee from '../pages/Coffee'
import Glass from '../pages/Profile'
import Saucer from '../pages/Profile'
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
    HashRouter
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
        <HashRouter>
        <div>
            <Navbar color="dark" light expand="md">
            <NavbarBrand className="text-light">
                <NavLink>
                    <Link className="text-light" to="/">Indra ReactJs</Link>
                </NavLink>
            </NavbarBrand>
                <NavbarToggler className="bg-light" onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink>
                                <Link className="text-light" to="/profile">Profile</Link>
                            </NavLink>
                            </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle className="text-light" nav caret>Espresso</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink>
                                                <Link to="/coffee">Coffee</Link>
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink>
                                                <Link to="/glass">Glass</Link>
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink>
                                                <Link to="/saucer">Saucer</Link>
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
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
        </div>
        </HashRouter>
        )
    }
}