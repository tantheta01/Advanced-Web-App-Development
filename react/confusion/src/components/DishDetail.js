import React,  { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';


class Detail extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedDish : null
		}
	}

	onSelectDish(dish) {

		this.setState({selectedDish : dish});
	}

	renderDish(dish) {

		if (dish != null) {
			
		}
	}
}