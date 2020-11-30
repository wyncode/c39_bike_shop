import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const AddRepairs = () => {
  const [formData, setFormData] = useState(null);
  const { bikeshop, setBikeshop } = useContext(AppContext);

  const id = match.params.id;

  useEffect(() => {
    axios
      .get(`/api/bikeshop/me`, { withCredentials: true })
      .then(({ data }) => {
        setBikeshop(data);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: `/api/repair`,
        withCredentials: true,
        Data
      });

      swal('Success! Repair has been added!');
      setFormData(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    history.push('/');
  };
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        <h1>Please add all repairs that you offer! </h1>
        <h4>
          Click the finished button once you have added all the repairs you
          would like.
        </h4>
        <Form.Label>Repair Name</Form.Label>
        <FormControl type="text" name="repair" onChange={handleChange} />
        <Form.Label>Repair Description</Form.Label>
        <FormControl
          type="text-area"
          name="description"
          onChange={handleChange}
        />
        <Form.Label>Repair Price</Form.Label>
        <FormControl type="text" name="price" onChange={handleChange} />
        <Form.Label>Estimated Time To Fix</Form.Label>
        <FormControl type="text" name="averagetime" onChange={handleChange} />
        <Form.Label>Sameday Available</Form.Label>
        <Form.Check
          type="checkbox"
          label="Sameday?"
          name="sameday"
          onChange={handleChange}
        />
      </Form>
      <Button className="btn-pink-lng-lg" onClick={handleClick}>
        Finish
      </Button>
    </div>
  );
};

export default AddRepairs;
