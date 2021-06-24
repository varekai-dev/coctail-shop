import React from "react";

import { Home } from "./pages";
import { Route } from "react-router-dom";
import { Layout } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Layout>
        <div className="content">
          <Route path="/" render={() => <Home />} exact />
        </div>
      </Layout>
    </div>
  );
}

export default App;
