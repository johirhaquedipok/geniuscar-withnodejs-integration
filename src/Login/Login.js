import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Email Sent");
  };
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [navigate, user, from]);
  return (
    <>
      {errorElement}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // value={emailRef}
            ref={emailRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // value={passwordRef}
            ref={passwordRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onClick={() => setCheck(!check)}
          />
        </Form.Group>
        <Button
          disabled={check ? false : true}
          variant={check ? "primary" : "light"}
          type="submit"
        >
          Submit
        </Button>
        <SocialSignIn />
        <Button variant="link" as={Link} to="/signup">
          Don't have any account?
        </Button>
        <Button variant="link" type="submit" onClick={handleResetPassword}>
          Forgot Your Password
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
};

export default Login;
