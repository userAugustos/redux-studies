import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import GlobalStyle from "./globalstyles";
import Routes from "./routes";
import { Provider } from "react-redux";

import store from "./store";
import Header from "./components/Header";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
