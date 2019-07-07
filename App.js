import React, { Component } from 'react';
import { render } from 'react-dom';
import { ProductDisplay } from '/Product/ProductDisplay';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1, name: "dove",
          category:"Soaps", price: 275
        },
        {
          id: 2, name: "cinthal",
          category: "Soaps", price: 48.95
        },
        { id: 3, name: "detal", category: "Soaps", price: 19.50 }
      ]
      
    }
    this.idCounter = 100;
  }
    saveData = (collection, item) => {
      if (item.id === "") {
        item.id = this.idCounter++;
        this.setState(state => state[collection]
          = state[collection].concat(item));
      } else {
        this.setState(state => state[collection]
          = state[collection].map(stored =>
            stored.id === item.id ? item : stored))
      }
    }


    deleteData = (collection, item) => {
      this.setState(state => state[collection]
        = state[collection].filter(stored => stored.id !== item.id));
    }

  render() {
    return <div>       
        <ProductDisplay
          name="Products"
          products={this.state.products}
          saveCallback={p => this.saveData("products", p)}
          deleteCallback={p => this.deleteData("products", p)} />

      </div>

  
  }
}


