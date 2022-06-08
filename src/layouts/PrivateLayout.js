import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  marginTop: "15vh",
});

const MainStyle = styled("div")(() => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
}));

function PrivateLayout() {
  return (
    <RootStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}



export default PrivateLayout;
