import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

// Get some other components up in here using decomposition from ES2015
var { Card, List } = mui;

class ChannelList extends React.Component {
  constructor(props) {
    super(props);

    // is this still valid?  Note: this constructor doesn't hot refresh for some reason.  The magic has run out.
    this.state = {
      channels: [
        'Dogs',
        'Cats'
      ]
    }
  }

  render() {
    var channelNodes = this.state.channels.map((chnl, i) => {
      return (
        <Channel key={i} channel={chnl} />
      );
    });

    return (
      <Card style={{
        flexGrow: 1
      }}>
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}


export default ChannelList;