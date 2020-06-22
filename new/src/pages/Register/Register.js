import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event, onSubmit) => {
    event.preventDefault();
  };

  return (
    <form className="register-form">
      <h1 className="form-title">Register</h1>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          required
          id="name"
          name="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail</label>
        <input
          required
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={values.email}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          name="password"
          label="Password"
          type="Password"
          value={values.password}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="form-actions">
        <button>create account</button>
      </div>
    </form>
  );
};

export default Register;
