import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import ENV from "../env.json";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: ENV.apiKey,
      authDomain: ENV.authDomain,
      databaseURL: ENV.databaseURL,
      projectId: ENV.projectId,
      storageBucket: ENV.storageBucket,
      messagingSenderId: ENV.messagingSenderId
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
