import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {
  Card, 
  CardText,
  RaisedButton
  } = mui;

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onClick() {
    console.log('logging in');
    
    // Fire off Alt (Flux) event
    Actions.login();
  }

  render() {
    return (
      <Card style={{
        'maxWidth': 800,
        'margin': '30px auto',
        'padding': 50
      }}>
        <CardText style={{
          'textAlign': 'center'
        }}>
          To start chatting, log in with Google
        </CardText>
        
        <RaisedButton 
          style={{
            display: 'block'
          }} 
          onClick={this.onClick.bind(this)} 
          label="Log in with Google" />
      </Card>
    );
  }
}

export default Login;