import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Detail from './DishDetail';
import Footer from './FooterComponent';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import '../App.css';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {

    return {

        dishes : state.dishes,
        comments: state.comments,
        leaders : state.leaders,
        promotions : state.promotions
    }
}

class Main extends Component {

  
  

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                comment = {this.props.comments.filter((comment) => comment.featured)[0]}
                leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
                promo = {this.props.promotions.filter((promo) => promo.featured)[0]}
          />
        )
    }
    return (
      <div className = "App">
      <Header />
      <Switch>
        <Route path="/home" component = {HomePage} />
        <Route exact path = "/menu"  component = { ()=> <Menu dishes = {this.props.dishes} /> }/>
        <Route exact path = "/contactus" component = {Contact} />
        <Redirect to = "/home" />
      </Switch>
      
      <Footer />
      </div>

   
  );
  }

} 

export default withRouter(connect(mapStateToProps)(Main));

