import React, { useState, useContext } from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import SideBar from '../components/SideBar';

import '../components/styles/profile.css';
import FileUploader from '../components/Fileuploader';
import axios from 'axios';
import swal from 'sweetalert';
import { AppContext } from '../context/AppContext';

const Profile = ({ history }) => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  //Here we want to get the image of the user.
  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/cyclist/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      //We are pulling up the
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      setLoading(false);
      swal('Looking Good!', 'Your image has been updated!', 'success');
      history.push('/avatar');
    } catch (error) {
      swal('You have been dropped!', 'Ooops, something went wrong.');
    }
  };

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
      </Container>
    </>
  );
};

export default Profile;
