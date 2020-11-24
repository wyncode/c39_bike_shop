import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import UserInfo from '../components/UserInfo';
import '../components/styles/profile.css';
import FileUploader from '../components/Fileuploader';

const Profile = () => {
  return (
    <div className="profilePage">
      <Container className=" d-flex align-items-center flex-column">
        <Card className="d-flex align-items-center profileTop mt-3">
          <Image
            src="https://imgur.com/PCEcljZ.png"
            className="profileImg"
            roundedCircle
          />
        </Card>
        <FileUploader />

        <h1 className="mt-5 heading">User Profile</h1>
      </Container>
      <Container className="d-flex justify-content-center">
        <SideBar />
        <UserInfo />
      </Container>
    </div>
  );
};

export default Profile;
