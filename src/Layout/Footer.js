import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 2 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
              "&:hover": {
                color: "goldenrod",
                transform: "translateX(5px)",
                transition: "all 400ms",
              },
            },
          }}
        >
      
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          <Link href="/">Home</Link>{" | "}
          <Link href="/recipe">Recipe</Link>{" | "}
          <Link href="/about">About Us</Link>{" | "}
          <Link href="/contact">Contact</Link>{" | "}
          
          <Link href="/login">Login</Link>
          <br />
          <br/>
          All Rights Reserved &copy; Sugar Rush
        </Typography>
      </Box>
    </>
  );
};

export default Footer;