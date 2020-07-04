import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Application } from "./component/globalPages/Application";
import { PageNotFound } from "./component/globalPages/PageNotFound";
import { Login } from "./component/globalPages/Login";
import { Register } from "./component/globalPages/Register";
import { RecoilRoot } from "recoil";

library.add(fas);

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/" component={Application} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
