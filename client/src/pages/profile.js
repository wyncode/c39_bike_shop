import React, { useState, useContext } from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import Chat from '../components/Chat';
import '../components/styles/profile.css';
import FileUploader from '../components/Fileuploader';
import { AppContext } from '../context/AppContext';

const Profile = ({ history }) => {
  const { currentUser } = useContext(AppContext);
  const [preview] = useState(null);

  return (
    <>
      <div className="profilePage">
        <Container className="d-flex flex-column">
          <Card className="d-flex align-items-center profileTop mt-5">
            <Image
              src={
                preview
                  ? preview
                  : currentUser?.avatar
                  ? currentUser?.avatar
                  : 'https://imgur.com/PCEcljZ.png'
              }
              alt="profile-picture"
              className="profileImg"
              roundedCircle
            />
          </Card>
          <div className="upload">
            <FileUploader />
          </div>
          <div className="mt-3 heading">
            <h1 className="userName">Your Profile</h1>
            <p>I am an avid cyclist who......</p>
            <h2>{currentUser?.name}</h2>
            <h6>{currentUser?.email}</h6>
            <h6>{currentUser?.zipCode}</h6>
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
