import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import PokeDetailPage from "../../pages/DetailPage";
import { routeMain, routeDetail } from "../../routes/routes";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.scss";

const AppContent = () => (
  <div className="app-wrapper">
    <Header />
    <main className="main">
      <div className="container">
        <Switch>
          <Route exact path={routeMain()} component={MainPage} />
          <Route exact path={routeDetail()} component={PokeDetailPage} />
          <Redirect to={{ pathname: routeMain() }} />
        </Switch>
      </div>
    </main>
    <Footer />
  </div>
);

export default AppContent;
