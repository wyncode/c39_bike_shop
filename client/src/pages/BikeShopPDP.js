import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, Button, Card, Form, Modal } from 'react-bootstrap';
import Map from '../components/Map';
import BikeShopCard from '../components/BikeShopCard';
import Review from '../components/Review';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const BikeShopPDP = ({ match, history }) => {
  const { setBikeshop, bikeshop } = useContext(AppContext);
  const [reviewData, setReviewData] = useState(null);

  const id = match.params.id;

  useEffect(() => {
    axios
      .get(`/api/bikeshop/find/${id}`, { withCredentials: true })
      .then(({ data }) => {
        setBikeshop(data);
      });
  }, []);

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('rating', reviewData.rating);
      formData.append('review', reviewData.review);
      await axios({
        method: 'POST',
        url: `/api/review/${id}/review`,
        withCredentials: true,
        formData
      });
      swal('New Review!', 'You review has been added!', 'success');
      setReviewData(null);
    } catch (error) {
      swal('Oops!', 'Something went wrong');
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <Map />
        <BikeShopCard bikeshop={bikeshop} />
        <hr className="pink-line-page-break" />
        <Button onClick={handleShow}>Add a Review</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Dialog>
            <Modal.Header className="close-btn" closeButton>
              <Modal.Title>Add A Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Label>Give this bikeshop a Rating from 1-5</Form.Label>
                <Form.Control
                  name="rating"
                  type="number"
                  id="rating"
                  max="5"
                  onChange={handleChange}
                />
                <Form.Label>Write your Review of the Bikeshop</Form.Label>
                <Form.Control
                  name="review"
                  id="review"
                  type="type-area"
                  onChange={handleChange}
                />
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                nClick={handleClose}
                onSubmit={handleSubmit}
              >
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
        <Card className="review">
          <Review review={bikeshop} />
        </Card>
        <Button
          className="btn-pink-lg-lng"
          onClick={() => history.push(`/repairs/${bikeshop?._id}`)}
        >
          Select Repairs
        </Button>

        <Link className="mt-4 shoplistLink" to="/shoplist">
          Back to Bike Shop List
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default BikeShopPDP;
