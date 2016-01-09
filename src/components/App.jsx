import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import mui from 'material-ui';
import DarkTheme from 'material-ui/lib/styles/raw-themes/dark-raw-theme';

//console.log(mui.Styles);
//console.log(DarkTheme);

var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component {
  constructor() {
    super();
  }
  
  // For something
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }
  
  getChildContext() {
    var defaultTheme = mui.Styles.ThemeManager.getMuiTheme(DarkTheme);
    //var appTheme = defaultTheme;
    var appTheme = mui.Styles.ThemeManager.modifyRawThemePalette(defaultTheme, {
      primary1Color: Colors.purple500,
      primary2Color: Colors.red500,
      primary3Color: Colors.deepPurple500,
      accent1Color: Colors.pink500
    });

    return {
      muiTheme: appTheme
    }
  }
  
  render() {
    return (
      <div>
        <AppBar title="Awesome Chat App" />
        <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        maxWidth: 1200,
        width: '100%',
        margin: '30px auto 30px'
        }}>
          <ChannelList />
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;