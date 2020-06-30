import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Detail from './DishDetail';
import Footer from './FooterComponent';
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
      <Header />
      <Menu dishes = {this.state.dishes}
        onClick = {(dish) => this.ondisSelect(dish)}
      />
      <Detail dish =  {this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />
      <Footer />
      </div>

   
  );
  }

} 

export default Main;

