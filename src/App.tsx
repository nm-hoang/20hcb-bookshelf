import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/common/PrivateRoute';
import { ClientRoute } from './components/common/ClientRoute';
// import ListTodo from './features/todo/pages/ListTodo';
import Homepage from './features/home/pages';
import BookDetails from './features/book/pages/BookDetails';
import Cart from './features/cart/pages/Cart';
import { PageUrl } from './api/models';
import PaymentInformation from './features/order/pages/PaymentInformation';
import OrderSuccess from './features/order/pages/OrderSuccess';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <ClientRoute path={`${PageUrl.BOOK}/:bookId`}>
            <BookDetails />
          </ClientRoute>
          <ClientRoute path={PageUrl.CART}>
            <Cart />
          </ClientRoute>
          <ClientRoute path={PageUrl.CHECKOUT}>
            <PaymentInformation />
          </ClientRoute>
          <ClientRoute path={PageUrl.CHECKOUT_SUCCESS}>
            <OrderSuccess />
          </ClientRoute>
          <ClientRoute exact path={PageUrl.HOMEPAGE}>
            <Homepage />
          </ClientRoute>
          <PrivateRoute path="/admin">{/* <Admin /> */}</PrivateRoute>
          <Route>{/* <NotFound /> */}</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
