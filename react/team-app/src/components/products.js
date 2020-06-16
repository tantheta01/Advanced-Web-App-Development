import React, { Component } from 'react';
import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

class ClassName extends Component {



	constructor(){

		super();

		this.state = {

			products : [
				{
					"name" : "KTM", "img" : "AkshatConfessions.png", "id" : 1, "price" : "2 lakh"
				},
				{
					"name" : "SastiBike", "img" : "review2.jpeg", "id" : 2, "price" : "3 lakh"
				},
				{
					"name" : "Aur Bhi SastiBike", "img" : "spectogram.png", "id" : 3, "price" : "5 rupees"
				},
				{
					"name" : "Akshat Ki Luna", "image" : "ThirdModel.jpg", "id": 4, "price" : "1 rupees"
				},

			],
			compare: {
				arr : []
			}

		}
	}
	render() {

		return (

			<Row>
				{
					this.state.products.map((product, index) => (
						<Col key = {product.id} md = "2" lg = "2" >
							<Card body outline engine = "primary" > 
								<img height="120px" width="240px" src={require("../assets/images/" + product.img)}/>
									<CardTitle> {product.name}</CardTitle>
									<Button type="button" id = {product.id} onClick = {this.handleClick}>Button</Button>
							</Card>

						</Col>


						)


						)
				}
			</Row>
			)
	}

}


export default ClassName;