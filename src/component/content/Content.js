import React from "react";
import { SearchBox } from "./SearchBox";
import { CategoriesList } from "./Category/CategoriesList";
import { Switch, Route, useLocation, useRouteMatch } from "react-router-dom";
import { ServicesList } from "./Services/ServicesList";
import { ServicePage } from "./Services/ServicePage";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Content = () => {
  let { path, url } = useRouteMatch();
  let query = useQuery();
  return (
    <div className="container">
      <Switch>
        <Route exact path={`${path}/categories`}>
          <CategoriesList />
        </Route>
        <Route
          exact
          path={`${path}/categories/:categoryName`}
          component={ServicesList}
        ></Route>
        <Route
          exact
          path={`${path}/service/:serviceName`}
          component={ServicesList}
        ></Route>
      </Switch>
    </div>
  );
};

export { Content };
