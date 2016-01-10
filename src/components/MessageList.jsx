import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'underscore';

// Get some other components up in here using decomposition from ES2015
var { Card, List } = mui;

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      messages: []
    }
    
    this.fb_Messages = new Firebase('react-demo-ergosoft.firebaseIO.com/messages');
    
    //
    // Grab initial data, and keep grabbing changes as well
    //
    this.fb_Messages.on("value", (dataSnapshot) => {
      var messagesVal = dataSnapshot.val();
      var messages = _.chain(messagesVal)
        .keys()
        .filter((key) => {
          return messagesVal[key].message;
        })
        .map((key) => {
          return _.extend(messagesVal[key], { key: key });
        })
        .value();
      this.setState({
        messages: messages
      });
    });    
  }
  
  render() {
    var messageNodes = this.state.messages.map((msg) => {
      return (
        <Message key={msg.key} message={msg.message} profilePic={msg.profilePic} />
      );
    });

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: '30px'
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}


export default MessageList;