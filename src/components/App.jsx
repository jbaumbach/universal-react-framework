import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    // Note: this constructor doesn't hot refresh for some reason.  The magic has run out.
    this.state = {
      messages: [
        'cool hats!, this is iiiii  15678',
        'i am fine, yoda yyyy no?'
      ]
    }
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
    var messageNodes = this.state.messages.map((msg, i) => {
      return (
        <p key={i}>{msg}</p>
      );
    })
    
    return (
      <div>
        <h1>Got some messages here nam syn?</h1>
        {messageNodes}
      </div>   
    )
  }
}

export default App;