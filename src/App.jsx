import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context';
import Header from './components/Header.jsx';
import Cart from './pages/Cart.jsx';
import Photos from './pages/Photos';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Photos />
            </Route>
            <Route path="/">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default hot(App);
