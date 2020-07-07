import React,{ Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody, ModalHeader, Input, Label, Form, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen : false,
			isModalOpen : false
		};
		this.NavToggle = this.NavToggle.bind(this);
		this.ModalToggle = this.ModalToggle.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
	NavToggle() {
		this.setState({
			isNavOpen : !this.state.isNavOpen
		});
	}

	ModalToggle() {
		this.setState({
			isModalOpen : !this.state.isModalOpen
		})
	}

	handleLogin(event) {
		this.ModalToggle();
		alert("Username: " + this.username.value + " Password : " + this.password.value + " Remember : " + this.remember.value);
		// alert("Lauda Lassan")
		event.preventDefault();
	}



	render() {
		return (
			<React.Fragment>
			<Navbar dark expand = "md">
				<div className = 'container'>
				<NavbarToggler onClick = {this.NavToggle} />
					<NavbarBrand className = "mr-auto" href="/">

						<img src = "assets/images/logo.png" width = "41" height="30" alt= "SantoorMummyKaRestaurant" />
					</NavbarBrand>
					<Collapse isOpen = {this.state.isNavOpen} navbar>
					<Nav navbar>

						<NavItem>
							<NavLink className = 'nav-link' to='/home'>
								<span className = "fa fa-home fa-lg"></span>Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className = 'nav-link' to='/aboutus'>
								<span className = "fa fa-info fa-lg"></span>About Us
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className = 'nav-link' to='/menu'>
								<span className = "fa fa-list fa-lg"></span>Menu
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className = 'nav-link' to='/contactus'>
								<span className = "fa fa-address-card fa-lg"></span>Contact Us
							</NavLink>
						</NavItem>
					</Nav>
					<Nav className = "ml-auto" navbar>
						<NavItem>
							<Button outline onClick = {this.ModalToggle}>
								<span class = "fa fa-sign-in fa-lg"></span>
								Login
							</Button>
						</NavItem>
					</Nav>
					</Collapse>
				</div>
			</Navbar>

			
			<Jumbotron>
				<div className = 'container' >
					<div className = 'row row-header'>
						<div className = 'col-12 col-sm-6'>
							<h1>Santoor Mummy ka restaurant</h1>
							<p> Andar Ghusne se pahle apne haath santoor se saaf kar leejiye and mujhpar line maarna mana hai </p>
						</div>
					</div>
				</div>
			</Jumbotron>
			<Modal isOpen = {this.state.isModalOpen} toggle = {this.ModalToggle}>
				<ModalHeader>
					Login!!
				</ModalHeader>
				<ModalBody>
					<Form onSubmit = {this.handleLogin} >
						<FormGroup>
							<Label htmlFor = "username">Username</Label>
							<Input type = "text" name = "username" id = "username" innerRef = {(input) => this.username = input} />
						</FormGroup>
						<FormGroup>
							<Label htmlFor = "password">Password</Label>
							<Input type = "password" name = "password" id = "password" innerRef = {(input) => this.password = input} />
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type= "checkbox" name = "remember" innerRef = {(input) => this.remember = input} />Remember Me
							</Label>
						</FormGroup>
						<Button type = "submit" value = "submit" color = "primary">Login</Button>
					</Form>
				</ModalBody>
			</Modal>
			</React.Fragment>
		      
			);
	}
}


export default Header;