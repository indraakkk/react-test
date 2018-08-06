import React, {Component} from 'react';
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
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand className="text-light" href="#">Indra ReactJs</NavbarBrand>
                        <NavbarToggler className="bg-light" onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink className="text-light" href="#">Components</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle className="text-light" nav caret>Option</DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>Option 1</DropdownItem>
                                            <DropdownItem>Option 2</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Reset</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                </Navbar>
            </div>
        )
    }
}