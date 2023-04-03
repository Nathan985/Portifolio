import { IRouterApplication } from "@interfaces/ICustomRouter";
import HomePage from "@pages/HomePage";

export const RoutesApplications = [
  {
    path: '/',
    element: <HomePage />,
    isPrivate: false,
  }
] as IRouterApplication[];