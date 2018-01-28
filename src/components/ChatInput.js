import React from 'react';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };

    // React ES6 does not bind 'this' to event handlers by default
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  
  submitHandler(event) {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // Clear the input box
    this.setState({ chatInput: '' });

    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.chatInput);
  }

  textChangeHandler(event)  {
    this.setState({ chatInput: event.target.value });
  }

  render() {
    return (
      

      <form className="chat-input" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          
          required >
            
            </input>
<input type="submit" className=" send" value="Send" />
          
        {/*<input type="text" className="form-control" placeholder="Search" id="txtSearch"/>
   <div className="input-group-btn">
        <button className="btn btn-primary" type="submit">
        <span className="glyphicon glyphicon-search"></span>
        </button>
   </div>*/}
      </form>

      
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;
