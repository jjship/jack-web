import React, { Component } from 'react';
import { FacebookProvider, MessageUs } from 'react-facebook';

export default class Messenger extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <MessageUs messengerAppId="123456789" pageId="123456789" />
      </FacebookProvider>
    );
  }
}
