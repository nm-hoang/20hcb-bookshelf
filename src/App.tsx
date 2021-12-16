import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/common/PrivateRoute';
import ListTodo from './features/todo/pages/ListTodo';

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/">
						<ListTodo />
					</Route>
					<PrivateRoute path="/admin">{/* <Admin /> */}</PrivateRoute>
					<Route>{/* <NotFound /> */}</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
