import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from 'react-share';

const SocialMedia = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            style={{ width: '25vw', display: 'inline-block' }}
            type="email"
            placeholder="Enter email"
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>

      <FacebookShareButton url={`yourpageurl`}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={`yourpageurl`}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <EmailShareButton url={`yourpageurl`}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  );
};

export default SocialMedia;
