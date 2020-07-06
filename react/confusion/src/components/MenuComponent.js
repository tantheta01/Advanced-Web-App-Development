import React,  { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {

	constructor(props){
		super(props);
	}
	
	
	 render() {
        const menu = this.props.dishes.map((dish) => {
        	return(
        			<div className = 'col-12 col-md-5 m-1'>
        				<Card key = { dish.id }>
                        <Link to = {`/menu/${dish.id}`}>
        				<CardImg width = '100%' src = {dish.image} alt = {dish.name} />
        				<CardImgOverlay>
        					<CardTitle>{dish.name}</CardTitle>
        				</CardImgOverlay>
                        </Link>
       					</Card>

        			</div>
        		);
        });
        // console.log(this.state.selectDish);

        return (
        		<div className='container'>
                    <div className = 'row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to = '/home'>HOME</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className = 'col-12'><h3>MENU</h3><hr /></div>
                    </div>


        			<div className='row'>
           				{menu}
        			</div>
        			
        		</div>

        	);
    }
}

export default Menu;