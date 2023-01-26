import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import { useNavigate } from "react-router-dom";
import { pages } from "../Helphers/Header.data";
import LogoutIcon from "@mui/icons-material/Logout";
import { modifyStore } from "../Services/Utility";
import { gapi } from "gapi-script";
import AppContext from "../App/Context/AppProvider";
import { APP_ACTIONS } from "../Constants/Constants";

const Header = () => {
  const navigate = useNavigate();
  const { setPopUp,authDispatch } = React.useContext(AppContext);
  const handleLogout = () => {
    modifyStore("token", "");
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      setPopUp("success", "LOGOUT SUCCESSFUL !");
    });
    navigate("/login");
  };
 
  return (
    <AppBar
      position="static"
      
      sx={{ backgroundColor: "#20232A", fontSize: "1.2rem" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CarRepairIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              fontSize: "2rem",
              color: "#61DAFB",
              textDecoration: "none",
            }}
          >
            CARS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CARS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              const { link, text } = page;
              return (
                <Button
                  key={page.text}
                  onClick={() => navigate(link)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "1.2rem",
                  }}
                >
                  {text}
                </Button>
              );
            })}
          </Box>
          <LogoutIcon sx={{ cursor: "pointer" }} onClick={handleLogout} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
