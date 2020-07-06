import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Detail from './DishDetail';
import Footer from './FooterComponent';
import { Switch, Redirect, Route } from 'react-router-dom';
import '../App.css';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import Home from './HomeComponent';
import Contact from './ContactComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS      
    };
  }
  

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                comment = {this.state.comments.filter((comment) => comment.featured)[0]}
                leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
                promo = {this.state.promotions.filter((promo) => promo.featured)[0]}
          />
        )
    }
    return (
      <div className = "App">
      <Header />
      <Switch>
        <Route path="/home" component = {HomePage} />
        <Route exact path = "/menu"  component = { ()=> <Menu dishes = {this.state.dishes} /> }/>
        <Route exact path = "/contactus" component = {Contact} />
        <Redirect to = "/home" />
      </Switch>
      
      <Footer />
      </div>

   
  );
  }

} 

export default Main;

