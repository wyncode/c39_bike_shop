import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import UserInfo from '../components/UserInfo';
import '../components/styles/profile.css';

const Profile = () => {
  return (
    <div>
      <Container className="profilePage d-flex align-items-center flex-column">
        <Card className="d-flex flex-column align-items-center profileTop mt-3">
          <Image
            src="https://imgur.com/PCEcljZ.png"
            className="profileImg"
            roundedCircle
          />
        </Card>
        <SideBar className="mt-5" />
        <UserInfo />
      </Container>
    </div>
  );
};

export default Profile;
