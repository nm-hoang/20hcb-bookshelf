import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/common/PrivateRoute';
import { ClientRoute } from './components/common/ClientRoute';
// import ListTodo from './features/todo/pages/ListTodo';
import Homepage from './features/home/pages';
import BookDetails from './features/book/pages/BookDetails';
import Cart from './features/cart/pages/Cart';

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
          <ClientRoute path="/book/:bookid">
						<BookDetails />
					</ClientRoute>
          <ClientRoute path="/cart">
						<Cart />
					</ClientRoute>
					<ClientRoute path="/">
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
