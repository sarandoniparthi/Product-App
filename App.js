import React, { Component } from 'react';
import { render } from 'react-dom';
import {ProductDisplay} from './ProductDisplay';

export  class App extends Component {
  constructor() {
    super();

    this.state = {
            products: [
                { id: 1, name: "Kayak",
                category: "Watersports", price: 275 },
                { id: 2, name: "Lifejacket",
                    category: "Watersports", price: 48.95 },
                { id: 3, name: "Soccer Ball", category: "Soccer", price: 19.50 }
            ]
    }
    
  }

  render() {
    return (
      <div>
      <ProductDisplay
                    name="Products"
                    products={ this.state.products }
                    saveCallback={ p => this.saveData("products", p) }
                    deleteCallback={ p => this.deleteData("products", p) } />
     
</div>

    );
  }
}


