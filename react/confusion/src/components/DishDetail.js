import React,  { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';



class Detail extends Component {
	constructor(props){
		super(props);
		
	}

	renderComments(dish){
		if(dish == null) return (<div></div>);
		const Comm = dish.comments.map((comment) => {
			return (
					<ListGroupItem>{comment.comment} {'\n'} -- {comment.author} {comment.date}</ListGroupItem>
				);
		});
		return (
				<div>
				<h4>
				Comments
				</h4>
					<ListGroup>
						{ Comm }
					</ListGroup>
					
				</div>
			);

	}

	renderDish(){
		if (this.props.dish!=null){
			return (<div className = 'col-12 col-md-5 m-1'>
					<Card>
						<CardImg top src = {this.props.dish.image}/>
						<CardBody>
							<CardTitle>{ this.props.dish.name }</CardTitle>
							<CardText>{ this.props.dish.description }</CardText>
						</CardBody>
					</Card>
					</div>
				);
		}
		else return (<div></div>);
	}
	render() {
		return (
				<div className = 'container'>
					<div className = 'row'>
					{this.renderDish()}
					{this.renderComments(this.props.dish)}
					</div>
				</div>
			);
	}
	
}

export default Detail;




