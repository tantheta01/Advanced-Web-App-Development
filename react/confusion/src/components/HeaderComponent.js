import React,{ Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {

	render() {
		return (
			<React.Fragment>
			<Navbar dark>
				<div className = 'container'>
					<NavbarBrand href="/">Hey waana eat</NavbarBrand>
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
			</React.Fragment>
		      
			);
	}
}


export default Header;