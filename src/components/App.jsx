import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'cool hats!' +
        ', this is ttttt  1',
        'i am fine, yoda yyyy yes?'
      ]
    }
  }

  render() {
    var messageNodes = this.state.messages.map((msg, i) => {
      return (
        <p key={i}>{msg}</p>
      );
    })
    
    return (
      <div>
        <h1>Got some messages here nam?</h1>
        {messageNodes}
      </div>   
    )
  }
}

export default App;