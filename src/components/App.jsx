import React from 'react';
import MessageList from './MessageList';

class App extends React.Component {
  constructor() {
    super();
  }
  
  // doesn't work with the "extends" method
  //getInitialState() {
  //  return {
  //    messages: [
  //      'cool hats!, this is iiiii  99999',
  //      'i am fine, yoda yyyy no?'
  //    ]
  //  }
  //}
  
  //componentDidMount() {
  //  this.setState({"messages": [ 'new message']})
  //}

  render() {
    return (
      <div>
        <h1>Got some messages here nam syn?</h1>
        <MessageList />
      </div>
    );
  }
}

export default App;