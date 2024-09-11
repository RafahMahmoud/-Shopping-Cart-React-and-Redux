import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart App</h1>
        <ProductList />
        <ShoppingCart />
      </div>
    </Provider>
  );
}

export default App;