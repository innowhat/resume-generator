import React, { useState } from "react";
import "./Login.css";
import { useLazyQuery, useMutation } from "@apollo/client";
import { Redirect } from "react-router";
import { LOGIN_MUTATION } from "./../../components/Queries/queries";
import { useForm } from "./../../components/Hooks/UseForm";

const Login = () => {
  // Use form state
  const { values, handleChange, handleSubmit } = useForm(
    (credentials) => login(),
    {
      email: "",
      password: "",
    }
  );

  // Lazy query for login user method
  const [login, { called, loading, data, error }] = useMutation(
    LOGIN_MUTATION,
    {
      variables: values,
    }
  );

  // Wait for lazy query
  if (called && loading) return <h1>LOADING</h1>;

  // Show error message if lazy query fails
  if (error) return <h1>Error</h1>;

  // Store token if login is successful
  if (data) {
    window.localStorage.setItem("token", data.login.token);

    // Redirect to home page
    return <Redirect to="/profiles" />;
  }

  return (
    <div className="login">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
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
            type="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit" variant="contained" color="primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
