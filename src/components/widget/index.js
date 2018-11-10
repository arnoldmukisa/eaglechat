import React, { Component } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-widget";
import notification from "components/notification";
import { connect } from "react-redux";
import actions from "redux/chat/actions";

import "react-chat-widget/lib/styles.css";

const { sendMessage } = actions;

// import logo from './logo.svg';

class App extends Component {
  componentDidMount() {
    addResponseMessage("Hello, How may we help you?");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API

    if (newMessage && newMessage.length > 0) {
      this.props.sendMessage(newMessage);
      this.setState({ newMessage: "" });
    } else {
      notification("error", "Please type something");
    }
  };

  state = {
    newMessage: ""
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Eagle Chat"
          subtitle="Talk to one of our agents"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedChatRoom, openCompose } = state.Chat;
  return { selectedChatRoom, openCompose };
}
export default connect(
  mapStateToProps,
  {
    sendMessage
  }
)(App);
