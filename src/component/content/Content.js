import React from "react";
import { CategoriesList } from "./Category/CategoriesList";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ServicesList } from "./Services/ServicesList";
import styled from "styled-components";
import { AddButton } from "../generic/AddButton";

const ContentWrap = styled.main`
  padding-bottom: 5rem;
  position: relative;
`;

//TODO MAKE FKNG BUTTON RIGHT
const PlusButton = styled.div`
  position: fixed;
  bottom: 4.5rem;
  z-index: 100;
`;

const Content = () => {
  let { path } = useRouteMatch();
  return (
    <ContentWrap className="container">
      <PlusButton>
        <AddButton />
      </PlusButton>
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
