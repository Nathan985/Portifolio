import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { RoutesApplications } from '../config/RoutesApplication';
import { IFcPrivateRouter } from '@interfaces/ICustomRouter';
const PrivateRouteApplication = ({ isAuthenticated, routeconfig }: IFcPrivateRouter) => {
  return (isAuthenticated ? routeconfig.element : <Navigate to='/Auth' />) as JSX.Element;
}

const RoutesApp : React.FC = () => {

  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {
            RoutesApplications.map((router, key) => (
              <Route 
                {...router}
                element={router.isPrivate ? <PrivateRouteApplication isAuthenticated={isAuthenticated} routeconfig={router} /> : router.element}
                key={key}
              />
            ))
          }
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp;
