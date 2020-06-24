import React from "react";
import { SearchBox } from "./SearchBox";
import { CategoriesList } from "./Services/CategoriesList";
import { Switch, Route, Routes, useRouteMatch } from "react-router-dom";
import { ServicesList } from "./Services/ServicesList";

const Content = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <Switch>
        <Route exact path={`${path}/category`}>
          <CategoriesList />
        </Route>
        <Route exact path={`${path}/category/:categoryid`}>
          <ServicesList />
        </Route>
      </Switch>
    </div>
  );
};

export { Content };
