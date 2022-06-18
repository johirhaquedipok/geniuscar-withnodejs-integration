import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
const SocialSignIn = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // github sign in
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError.message} {githubError?.message}
        </p>
      </div>
    );
  }
  if (googleUser) {
    navigate("/home");
  }
  return (
    <>
      <div>{errorElement}</div>
      <div className="d-flex flex-column mb-2 mt-5">
        <Button
          variant="primary"
          size="lg"
          className=" mb-2"
          onClick={() => signInWithGoogle()}
        >
          Google
        </Button>
        <Button variant="secondary" size="lg" className=" mb-2">
          GitHub
        </Button>
        <Button variant="info" size="lg" className=" mb-2">
          Facebook
        </Button>
      </div>
    </>
  );
};

export default SocialSignIn;
