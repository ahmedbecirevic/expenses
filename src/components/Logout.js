import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <Button variant="primary" onClick={() => {
      localStorage.removeItem("token")
      navigate("sign-in")
    }}>
      Logout
    </Button >
  )
}

export default Logout