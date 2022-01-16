import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import FooterComponent from '../layout/Footer';
import HeaderComponent from '../layout/Header';

export function ClientRoute(props: RouteProps) {
  return (
    <>
      <HeaderComponent />
      <div className="bg-white" style={{ minHeight: '50vh', marginBottom: '60px' }}>
        <Route {...props} />
      </div>
      <FooterComponent />
    </>
  );
}
