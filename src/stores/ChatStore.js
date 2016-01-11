import alt from '../alt';
import Actions from '../actions';

// This lets you do ES7 (2016) decorator stuff yourself
import {decorate, bind, datasource} from 'alt/utils/decorators';

// this decorator wires up stuff so you can use other decorators in the class.
@decorate(alt)
class ChatStore {
  constructor(props) {
    this.state = {user: null};
  }
  
  // this decorator wires up this function to be called when the message
  // actions/login happens.
  @bind(Actions.login)
  login(user) {
    this.setState({user:user});
  }
  
  
}

export default alt.createStore(ChatStore);
