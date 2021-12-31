import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import FooterComponent from '../layout/Footer';
import HeaderComponent from '../layout/Header';

export function ClientRoute(props: RouteProps) {
	return (
		<>
			<HeaderComponent />
			<div className="bg-white" style={{ minHeight: '50vh', padding: '10px 22px 60px 22px' }}>
				<Route {...props} />
			</div>
			<FooterComponent />
		</>
	);
}
