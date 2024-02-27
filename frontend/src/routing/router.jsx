import { Route, Routes } from "react-router-dom";
import routingData from "./routingData";

const Router = ({data, women, men, kids}) => {
  const pageRoutes = routingData(data, women, men, kids).map(({ path, element, title }) => (
    <Route key={title} path={`/${path}`} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
