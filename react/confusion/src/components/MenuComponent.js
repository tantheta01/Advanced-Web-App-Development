import React,  { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';
import Detail from './DishDetail';
class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectDish : null

		}
	}
	ondisSelect(Dish){
		this.setState({ selectDish : Dish});
		console.log("Hiii");
	}
	
	 render() {
        const menu = this.props.dishes.map((dish) => {
        	return(
        			<div className = 'col-12 col-md-5 m-1'>
        				<Card key = { dish.id }
        				onClick = {() => this.ondisSelect(dish)}>
        				<CardImg width = '100%' src = {dish.image} alt = {dish.name} />
        				<CardImgOverlay>
        					<CardTitle>{dish.name}</CardTitle>
        				</CardImgOverlay>
       					</Card>

        			</div>
        		);
        });
        console.log(this.state.selectDish);

        return (
        		<div className='container'>
        			<div className='row'>
        				{menu}
        			</div>
        			<div className = 'row'>
        			<Detail dish = {this.state.selectDish} />
        			</div>
        		</div>

        	);
    }
}

export default Menu;