import React from 'react';
import mui from 'material-ui';

var { Card } = mui;

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
  }

  onChange(event) {
    console.log(`got value: ${event.target.value}`);
    this.setState({
      message: event.target.value
    });
  }
  
  render() {
    return (
      <Card style={{
        maxWidth: 1200,
        margin: '30px auto',
        padding: 30
      }}>
        <textarea
          onChange={this.onChange.bind(this)}
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