import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const onLoggedInHandler = ({ tokenId, Ru }) => {
   localStorage.setItem("token", tokenId);
   navigate("ëxpenses")
  };

  if (localStorage.getItem("token")) {
    localStorage.setItem("token", searchParams.get("token"));
  }

  return (
    <GoogleLogin
      clientId="939757022094-s3i5fmar4d1vbiu6i7834jh6u8kmgotl.apps.googleusercontent.com"
      buttonText="Sign in"
      onSuccess={onLoggedInHandler}
      onFailure={() => console.log("fail")}
      cookiePolicy="single_host_origin"
    />
  );
}

export default Login;
