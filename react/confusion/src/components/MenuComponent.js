import React,  { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dishes : [
				{
					id : 1,
					name : "Uthappizza",
					image : 'assets/images/uthappizza.png',
					price : 400,
					category : "mains"
				},
				{
					id : 2,
					name : "Zucchipakoda",
					image : 'assets/images/zucchipakoda.png',
					price : 500,
					category : 'starters'
				},
				{
					id : 3,
					name : 'Vadonut',
					image : 'assets/images/vadonut.png',
					price : 400,
					category : 'appetizer'
				},
				{
					id : 4,
					name : 'Elaicheesecake.png',
					image : 'assets/images/elaicheesecake.png',
					price : 300,
					category : "dessert",

				}
				/*{
					id : 5,
					name : ''
				}
			*/]

		};
	}

	 render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;