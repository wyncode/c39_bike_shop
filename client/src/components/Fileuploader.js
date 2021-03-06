import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import { AppContext } from '../context/AppContext';
// Style the Button component
const FileUploader = (props) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const UploadButton = styled.button`
    background: transparent;
    border: none;
    height: 50px;
    width: 50px;
    z-index: 1;
  `;
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  const handleSubmit = async (event, fileUploaded) => {
    event.preventDefault();
    const avatar = fileUploaded;
    console.log(avatar);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/avatar',
        data: avatar
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      swal('Sweet!', 'Your image has been updated!', 'success');
    } catch (error) {
      swal('Error', 'Oops, something went wrong.');
    }
  };
  return (
    <>
      <UploadButton
        className="d-flex justify-content-center align-items-center"
        onClick={handleClick}
      >
        <Image height="50px" width="50px" src="https://imgur.com/OQzEnfS.png" />
      </UploadButton>
      <input
        type="file"
        name="avatar"
        ref={hiddenFileInput}
        onChange={handleSubmit}
        style={{ display: 'none' }}
      />
    </>
  );
};
export default FileUploader;
