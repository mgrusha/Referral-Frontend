import React from "react";
import { SearchBox } from "./SearchBox";
import { CategoriesList } from "./Services/CategoriesList";
import { Switch, Route, Routes, useRouteMatch } from "react-router-dom";
import { ServicesList } from "./Services/ServicesList";
import { ServicePage } from "./Services/ServicePage";

const Content = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <Switch>
        <Route exact path={`${path}/categories`}>
          <CategoriesList />
        </Route>
        <Route exact path={`${path}/categories/:categoryid`}>
          <ServicesList />
        </Route>
        <Route exact path={`${path}/services/:serviceid`}>
          <ServicePage />
        </Route>
      </Switch>
    </div>
  );
};

export { Content };
