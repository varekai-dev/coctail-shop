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
          <Route path="/coctail/:id" component={Coctail} />
          <Route path="/coctails/:id" component={Coctails} />
          <Route path="/coctails/" component={Coctails} />
        </div>
      </Layout>
    </div>
  );
}

export default App;
