import { PathRouteProps } from "react-router-dom";

export interface IRouterApplication extends PathRouteProps {
  isPrivate?: boolean;
}

export interface IFcPrivateRouter{
  isAuthenticated: boolean;
  routeconfig: IRouterApplication;
}