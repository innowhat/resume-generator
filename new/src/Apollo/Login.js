import React from "react";
import { useMutation } from "@apollo/client";
import { Redirect } from "react-router";
import { LOGIN_USER } from "./queries";
import { useForm } from "./hooks";

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
  const [login, { called, loading, data, error }] = useMutation(LOGIN_USER, {
    variables: values,
  });

  // Wait for lazy query
  if (called && loading) return <h1>LOADING</h1>;

  // Show error message if lazy query fails
  if (error) return <h1>Error</h1>;

  // Store token if login is successful
  if (data) {
    window.localStorage.setItem("token", data.login.token);

    // Redirect to home page
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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
        <input
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit" variant="contained" color="primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
