import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    pincode: '',
    mobile: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const isAlphabet = (str) => {
    return str.split('').every(char => char.toLowerCase() !== char.toUpperCase());
  };

  const isAlphanumeric = (str) => {
    return str.split('').every(char => char.toLowerCase() !== char.toUpperCase() || !isNaN(char));
  };

  const isNumeric = (str) => {
    return str.split('').every(char => !isNaN(char));
  };

  const validate = () => {
    const newErrors = {};

    // Name validation: alphabets only
    if (!isAlphabet(formData.name)) {
      newErrors.name = 'Name should contain alphabets only.';
    }

    // Username validation: alphanumeric
    if (!isAlphanumeric(formData.username)) {
      newErrors.username = 'Username should be alphanumeric.';
    }

    // Pin code validation: numbers only
    if (!isNumeric(formData.pincode)) {
      newErrors.pincode = 'Pin code should contain numbers only.';
    }

    // Mobile number validation: numbers only
    if (!isNumeric(formData.mobile)) {
      newErrors.mobile = 'Mobile number should contain numbers only.';
    }

    // Address validation: alphanumeric
    if (!isAlphanumeric(formData.address)) {
      newErrors.address = 'Address should be alphanumeric.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
    } else {
      alert('Please correct the errors.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div>
        <label>Pin Code:</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        {errors.pincode && <span>{errors.pincode}</span>}
      </div>

      <div>
        <label>Mobile Number:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <span>{errors.mobile}</span>}
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span>{errors.address}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
