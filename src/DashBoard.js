import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { uselocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/dashBoardSlice";

const DashBoard = () => {
  const [auth, setAuth] = React.useState(true);
  const { State } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const dispatch = useDispatch();

  const postData = useSelector((state) => {
    return state.postData;
  });
  const fetchPostData = () => {
    let Usertoken = localStorage.getItem("token");
    console.log(Usertoken, "kjkjkjk");
    dispatch(fetchPosts(Usertoken));
  };
  useEffect(() => {
    fetchPostData();
  }, []);

  //clear local storage
  const clearData = () => {
    window.localStorage.clear();
  };
  // for dash board Header
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link href="profile" variant="body2">
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>

      <MenuItem onClick={handleMenuClose}>Setting</MenuItem>

      <Link href="/" variant="body2">
        <MenuItem onClick={() => clearData()}>Log Out</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  console.log(mobileMenuId, "Hamza");

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              CloudTek
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {/* {renderMobileMenu} */}
        {renderMenu}
      </Box>
      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="contained" size="medium" startIcon={<EditIcon />}>
          Create Post
        </Button>
      </Box>
      {/* {postData.map((item) => {
        return (
          <>
            {item.id}
            <h1>jreg</h1>
          </>
        );
      })} */}
    </>
  );
};

export default DashBoard;
