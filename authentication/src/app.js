import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyCkejklz-cZe3uhzDZCj4IDgCvAlQnEqWQ',
    authDomain: 'auth-eb1be.firebaseapp.com',
    databaseURL: 'https://auth-eb1be.firebaseio.com',
    projectId: 'auth-eb1be',
    storageBucket: 'auth-eb1be.appspot.com',
    messagingSenderId: '379906129652'
  });

   firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           this.setState({ loggedIn: true });
         } else {
           this.setState({ loggedIn: false });
         }
       });

}

renderContent(){
 switch(this.state.loggedIn){
   case true:
     return (
    <CardSection>
     <Button onPress={this.onLogout.bind(this) }>
      Log Out
     </Button>
    </CardSection>
   );

   case false:
     return <LoginForm />;

  default:
     return (
       <View style={styles.butTest} >
       <Spinner />
       </View>
       );
}
}

onLogout(){
firebase.auth().signOut();

}

render() {
    return(
      <View>
      <Header getHeader='Authentication' />
        {this.renderContent()}
     </View>
  );
  }
};

const styles={
  butTest: {
    marginTop: 100
  }
}


export default App;
