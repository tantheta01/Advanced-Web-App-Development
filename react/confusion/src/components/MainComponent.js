import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Detail from './DishDetail';
import '../App.css';
import { DISHES } from '../shared/dishes'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };

  }
  ondisSelect(Dish){
    this.setState({ selectedDish : Dish});
    console.log("Hiii");
  }

  render() {
    return (
      <div className = "App">
      <Navbar dark color='primary'>
      <div className = 'container'>
      <NavbarBrand href="/">Hey waana eat</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes = {this.state.dishes}
        onClick = {(dish) => this.ondisSelect(dish)}
      />
      <Detail dish =  {this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />
      </div>

   
  );
  }

} 

export default Main;

