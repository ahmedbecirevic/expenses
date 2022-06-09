import GoogleLogin from "react-google-login";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../features/userSlice";
import { Box } from "@mui/material";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoggedInHandler = ({ tokenId, Ru }) => {
    const googleId = jwt_decode(tokenId)?.sub;
    console.log(googleId);
    dispatch(setUserId(googleId));
    localStorage.setItem("id", googleId);
    localStorage.setItem("token", tokenId);
    navigate("ëxpenses")
  };

  if (localStorage.getItem("token")) {
    localStorage.setItem("token", searchParams.get("token"));
  }

  return (
    <Box 
      sx={{
        display: "flex",
        minHeight: "100vh",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box sx={{
              bgcolor: "#1a4246",
              height: "45vh",
              width: {lg: "25vw", xs: "70vw", sm: "38vw"},
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              p: 3,
              borderRadius: "7px",
            }}
            >
        <Box sx={{mb: 5}}>
          <img width={"120px"} height={"120px"}  src="/static/logos/expense.png" alt="expense" />
        </Box>
        <GoogleLogin
          clientId="939757022094-s3i5fmar4d1vbiu6i7834jh6u8kmgotl.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={onLoggedInHandler}
          onFailure={() => console.log("fail")}
          cookiePolicy="single_host_origin"
      />
      </Box>
    </Box>
  );
}

export default Login;
