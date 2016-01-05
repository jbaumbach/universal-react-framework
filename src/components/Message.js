import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div key={this.props.key}>{this.props.message}</div>
    )
  }
}

export default Message;