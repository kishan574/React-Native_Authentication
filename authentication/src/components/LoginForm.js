import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, CardSection, Card, Input, Spinner } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };


onLoginPress(){
    const { email, password } = this.state;

this.setState({error: '', loading: true });
 firebase.auth().signInWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this)).catch(this.onLoginFail.bind(this));
 }


onCreatePress(){
   const { email, password } = this.state;

 this.setState({error: '', loading: true });
 firebase.auth().createUserWithEmailAndPassword(email,password).then(this.onCreateSuccess.bind(this)).catch(this.onCreateFail.bind(this));

}

onLoginFail() {
  this.setState({
    error: 'Authentication failed!',
    loading: false });
}

onLoginSuccess() {

  this.setState({
      email: '',
      password: '',
      loading: false,
     error: ''
    });
}

onCreateFail() {
  this.setState({
    error: 'Create failed!',
    loading: false });
}

onCreateSuccess() {
  this.setState({
      email: '',
      password: '',
      loading: false,
      error: 'Success'
    });
}

renderLoginButton () {
  if(this.state.loading){
    return <Spinner size="large" /> ;
  }

  return(
   <Button onPress={this.onLoginPress.bind(this) }>
 Login
   </Button>
 );
}
renderCreateButton () {
  if(this.state.loading){
    return <Spinner size="large" /> ;
  }
  return(
   <Button onPress={this.onCreatePress.bind(this) }  >
 create
   </Button>);
}

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder="username@gmail.com"
          label= "Email"
          value={this.state.email}
          onChangeText={ email => this.setState({ email })}
           />
        </CardSection>

        <CardSection>
        <Input
        secureTextEntry
        placeholder="must be at least 6 char"
        label= "Password"
        value={this.state.password}
        onChangeText={ password => this.setState({ password })}
         />
        </CardSection>

          <Text style={styles.errorStyle}> {this.state.error}  </Text>

        <CardSection>
          {this.renderLoginButton()}
          {this.renderCreateButton()}
        </CardSection>

        </Card>
    );
  }

}

const styles={
  errorStyle:{
    fontSize: 22,
    color: '#F00',
    alignSelf: 'center'

  }
}

export default LoginForm;
