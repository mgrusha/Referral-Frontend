import React from "react";
import { CategoriesList } from "./Category/CategoriesList";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ServicesList } from "./Services/ServicesList";
import styled from "styled-components";

const ContentWrap = styled.main`
  padding-bottom: 5rem;
`;

const Content = () => {
  let { path } = useRouteMatch();
  return (
    <ContentWrap className="container">
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
    </ContentWrap>
  );
};

export { Content };
