import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    
    // is this still valid?  Note: this constructor doesn't hot refresh for some reason.  The magic has run out.
    this.state = {
      messages: [
        'cool hats!, this is uuuuu  15678',
        'i am fine, yoda yyyy no?'
      ]
    }
  }
  
  render() {
    var messageNodes = this.state.messages.map((msg, i) => {
      return (
        <Message key={i} message={msg} />
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}


export default MessageList;