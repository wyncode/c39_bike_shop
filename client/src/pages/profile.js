import React, { useState } from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import Chat from '../components/Chat';
import '../components/styles/profile.css';
import FileUploader from '../components/Fileuploader';

const Profile = ({ user }) => {
  return (
    <>
      <div className="profilePage">
        <Container className="d-flex flex-column">
          <Card className="d-flex align-items-center profileTop mt-5">
            <Image
              src="https://imgur.com/PCEcljZ.png"
              className="profileImg"
              roundedCircle
            />
          </Card>
          <div className="upload">
            <FileUploader />
          </div>
          <div className="mt-3 heading">
            <h1 className="userName">User Profile</h1>
            <p>I am an avid cyclist who......</p>
            <h6>email</h6>
            <h6>zipcode</h6>
          </div>
        </Container>
      </div>
      <Container className="d-flex justify-content-center">
        <SideBar />
        <Chat />
      </Container>
    </>
  );
};

export default Profile;
