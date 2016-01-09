import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
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
  
  // For something - not explained super well yet
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };
  
  //
  // All children of this component get this context now.  The material-ui components use the "muiTheme" property
  // of the context to display themselves.
  //
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
        margin: '30px auto'
        }}>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }
}

export default App;