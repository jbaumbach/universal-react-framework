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
      messages: {}
    }
    
    this.fb_Messages = new Firebase('react-demo-ergosoft.firebaseIO.com/messages');
    
    //
    // Listen for new message
    //
    this.fb_Messages.on("child_added", (newMsg) => {
      //
      // Make sure there are no duplicates or invalid items
      //
      if (this.state.messages[newMsg.key()] || !newMsg.val().message) {
        return;
      }
      
      //
      // We're not trying to mutate the state here, just a shortcut.  Let's stick
      // the primary key into the object itself, so it's easier to get when looping.
      //
      let newItem = _.extend(newMsg.val(), {
        key: newMsg.key()
      });
      this.state.messages[newItem.key] = newItem;
      
      //
      // Set new items
      //
      this.setState(this.state);
    });

    //
    // If an item is removed
    //
    this.fb_Messages.on("child_removed", (removedMsg) => {
      delete this.state.messages[removedMsg.key()];
      this.setState(this.state);
    });


  }
  
  render() {
    var messageNodes = _.values(this.state.messages).map((msg) => {
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