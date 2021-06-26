import React from "react";

import { Home, Coctails, Coctail } from "./pages";
import { Route } from "react-router-dom";
import { Layout } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Layout>
        <div className="content">
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/coctail/:id"
            render={(props) => <Coctail {...props} />}
          />
          <Route
            exact
            path="/coctails/:id"
            render={(props) => <Coctails {...props} />}
          />
        </div>
      </Layout>
    </div>
  );
}

export default App;
