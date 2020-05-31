import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Intro from "./components/layout/Intro.jsx";
import NotFound from "./components/layout/NotFound.jsx";
import Background from "./components/layout/Background.jsx";
import Portfolio from "./components/layout/Portfolio.jsx";
import SearchCat from "./components/search/SearchCats.jsx";
import ChatRoom from "./components/chat/ChatRoom.jsx";
import MapApp from "./components/map/MapApp.jsx";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Intro}></Route>
            <Route exact path="/background" component={Background}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/search" component={SearchCat}></Route>
            <Route exact path="/chat" component={ChatRoom}></Route>
            <Route exact path="/map" component={MapApp}></Route>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
