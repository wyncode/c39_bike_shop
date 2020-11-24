import React, { useState } from 'react';
import { Container, Image, Card, Button, Collapse } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import UserInfo from '../components/UserInfo';
import '../components/styles/profile.css';
import FileUploader from '../components/Fileuploader';

const Profile = () => {
  const [open, setOpen] = useState(false);
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
            <div className="coverPhotoUpload">
              <FileUploader />
            </div>
          </Card>
          <div className="upload">
            <FileUploader />
          </div>
          <div className="mt-3 heading">
            <h1>User Profile</h1>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              click
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
          </div>
        </Container>
      </div>
      <Container className="d-flex justify-content-center">
        <SideBar />
        <UserInfo />
      </Container>
    </>
  );
};

export default Profile;
