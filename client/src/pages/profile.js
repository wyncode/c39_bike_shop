import React from 'react';
import { Form, Button, Container, Image } from 'react-bootstrap';

const Profile = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <Form className="d-flex flex-column align-items-center justify-content-center mt-4">
          <h1 className="mt-4">Cyclist Profile</h1>
          <div className="mt-4">
            <Image
              src={
                'https://imgur.com/PCEcljZ.png'
                // preview
                //   ? preview
                //   : currentUser?.avatar
                //   ? currentUser?.avatar
                //   :
              }
              alt="profile-picture"
              width={100}
              height={100}
              roundedCircle
            />
          </div>
          <div className="mt-4">
            <form className="d-flex flex-column">
              <input type="file" accept="image/*" />
              <Button type="submit" size="sm" className="mt-4">
                Save Image
              </Button>
            </form>
          </div>

          <Form.Group className="d-flex ">
            <Form.Label htmlFor="name" className="pr-4 font-weight-bold">
              Name:
            </Form.Label>
            <p>User's Name Goes Here</p>
          </Form.Group>

          <div className="d-flex">
            <label htmlFor="email" className="pr-4 font-weight-bold">
              Email:
            </label>
            <p>Users Email</p>
          </div>
          <Button variant="danger">Delete Account</Button>
        </Form>
      </Container>
    </>
  );
};

export default Profile;
