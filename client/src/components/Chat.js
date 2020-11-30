import React, { useEffect } from 'react';
import './styles/profile.css';
import { Widget, addResponseMessage, addLinkSnippet } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';
import swal from 'sweetalert';

const Chat = () => {
  useEffect(() => {
    addResponseMessage('Welcome to the BikeShop! How may we assist you?');
  }, []);

  const handleNewUserMessage = async (newMessage) => {
    console.log(`New Message incoming! ${newMessage}`);
    try {
      axios({
        method: 'POST',
        url: `/api/chat`,
        body: JSON.stringify(),
        withCredentials: true
      });
    } catch (error) {
      swal('Sorry! There are no ride leaders available at this time!');
    }
    await addResponseMessage(
      `Sure. I would love to help you. Let me check on that!`
    );
    await addLinkSnippet({
      title: 'Search for a Bikeshop',
      link: '/shoplist'
    });
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Contact the Bikeshop"
        subtitle="Reach out with all your questions!"
      />
    </div>
  );
};

export default Chat;
