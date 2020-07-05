import React from "react";
import { CategoriesList } from "./Category/CategoriesList";
import { Switch, Route, NavLink } from "react-router-dom";
import { ServicesList } from "./Services/ServicesList";
import styled from "styled-components";
import { AddButton } from "../generic/AddButton";
import { AddService } from "./Services/AddService";
import { ServiceByName } from "./Services/ServiceByName";

const ContentWrap = styled.main`
  padding-bottom: 5rem;
  position: relative;
`;

//TODO MAKE FKNG BUTTON RIGHT
const PlusButton = styled.div`
  position: relative;
  z-index: 100;
  display: grid;
  justify-content: center;
  @media (min-width: 768px) {
    bottom: 4.5rem;
    position: fixed;
    display: block;
  }
`;

const Content = () => {
  return (
    <ContentWrap className="container">
      {localStorage.getItem("user") && (
        <PlusButton>
          <NavLink strict to={`/addService`}>
            <AddButton />
          </NavLink>
        </PlusButton>
      )}
      <Switch>
        <Route exact path={`/categories`}>
          <CategoriesList />
        </Route>
        <Route exact path={`/`}>
          <CategoriesList />
        </Route>
        <Route
          exact
          path={`/categories/:categoryName`}
          component={ServicesList}
        ></Route>
        <Route
          exact
          path={`/service/:serviceName`}
          component={ServiceByName}
        ></Route>
        <Route exact path={`/addService`} component={AddService}></Route>
      </Switch>
    </ContentWrap>
  );
};

export { Content };
