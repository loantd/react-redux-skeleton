import React from 'react';
import { showInfo } from '../../containers/alert';

class Chat extends React.Component {

  send() {
    this.props.dispatch(showInfo('Test message'));
  }
  render() {
    return (
      <div>
        <input type={'button'} onClick={this.send.bind(this)} value={'click'} />
      </div>);
  }
}

export default Chat;
