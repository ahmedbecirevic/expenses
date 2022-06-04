import GoogleLogin from "react-google-login";

function Login() {
  const onLoggedInHandler = ({ tokenId, Ru }) => {
    console.log(Ru?.AY);
  };

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
