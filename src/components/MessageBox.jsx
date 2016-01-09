import React from 'react';
import mui from 'material-ui';

var { Card } = mui;

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: 'world'
    }
  }

  render() {
    return (
      <Card style={{
        maxWidth: 1200,
        margin: '30px auto',
        padding: 30
      }}>
        <textarea style={{
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