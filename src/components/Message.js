import React from 'react';
import Response from './Response';

// function getResponse(){
// console.log(this.props.message);
// return(<p>{this.props.message}</p>);
   



// }







class Message extends React.Component {

// getMes(props){

//   this.props.response='response3';
//   return(<div>{this.props.response}</div>);
// }



  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
      <div>
        <div className={`message ${fromMe}`}>
          <div className='username'>
            {this.props.username}
          </div>
          <div className='message-body'>
            {this.props.message}
           
          </div>

        </div>

<div className={`response ${fromMe}`}>
        <div className='response-body'>

        
       
         



        </div>

</div>

      </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  response: 'response1',
  username: '',
  fromMe: false
};

export default Message;
