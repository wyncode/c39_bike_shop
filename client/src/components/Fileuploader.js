import React, { useRef } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

// Style the Button component

const FileUploader = (props) => {
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
    props.handleFileInput(fileUploaded);
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
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </>
  );
};
export default FileUploader;
