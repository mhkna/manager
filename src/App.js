import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCgKetT_V0VQ4b07mBqPaxMQD7-d7J0Xg8",
      authDomain: "manager-b6d00.firebaseapp.com",
      databaseURL: "https://manager-b6d00.firebaseio.com",
      projectId: "manager-b6d00",
      storageBucket: "",
      messagingSenderId: "1067030410836"
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
