import React, { Component } from "react";
import { Provider } from "react-redux";
import { Text, View } from "react-native";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ENV from "../env.json";

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
