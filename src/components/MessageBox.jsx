import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase';

var { Card } = mui;

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
    
    this.fb_Messages = new Firebase('react-demo-ergosoft.firebaseIO.com/messages');

    
  }

  onChange(event) {
    //console.log(`got changed value: ${event.target.value}`);
    
    this.setState({
      message: event.target.value
    });
  }
  
  onKeyUp(event) {
    var message = trim(event.target.value);
    
    if (event.keyCode === 13 && message != '') {
      console.log(`got submitted value: ${event.target.value}`);
      event.preventDefault();
      
      this.setState({
       message: ''
      });
      
      // Save to db.  Should make a new default key
      this.fb_Messages.push({
        message: message,
        extra: 'stuff'
      })
     
    } else {
      
    }
  }
  
  render() {
    return (
      <Card style={{
        maxWidth: 1200,
        margin: '30px auto',
        padding: 30
      }}>
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={{
          width: '100%',
          borderColor: 'green',
          resize: 'none',
          borderRadius: 5,
          minHeight: 50,
          color: '#444',
          fontSize: 14,
          outline: 'auto 0px'
        }} />
      </Card>
    );
  }
}


export default MessageBox;