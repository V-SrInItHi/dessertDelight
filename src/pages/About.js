import React from "react";
import Layout from "../Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          backgroundColor: "#fff",
          opacity:"0.75",
          
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            color: "#673ab7",
          },
          "& p": {
            textAlign: "justify",
            lineHeight: "1.5",
            color: "#333",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">
          Welcome to Sugar Rush – Where Sweet Dreams Come to Life!
        </Typography>
        <p>
          At Sugar Rush, we believe that every moment is sweeter with
          a touch of indulgence. Our passion for desserts goes beyond the
          kitchen; it's a celebration of flavors, textures, and the joy that
          comes from sharing delightful treats with your loved ones.
        </p>
        <br />
        <Typography variant="h6" color="#673ab7">
          Our Sweet Story:
        </Typography>
        <p>
          Founded 2024, Sugar Rush was born out of a shared
          love for all things sweet. Whether you're a seasoned baker or someone
          with a sweet tooth, our goal is to inspire and guide you through a
          delectable journey of creating mouthwatering desserts in your own
          kitchen.
        </p>
        <br />
        <Typography variant="h6" color="#673ab7">
          What Sets Us Apart:
        </Typography>
        <ul>
          <li>
            <strong>Handpicked Recipes:</strong> Our collection of recipes is
            curated with care, ranging from classic favorites to innovative,
            trending creations. Each recipe is meticulously tested to ensure
            foolproof success, even for beginners.
          </li>
          <li>
            <strong>Visual Feast:</strong> We understand that the first bite is
            taken with the eyes. That's why we showcase our desserts with
            stunning photography that captures the essence and beauty of each
            creation.
          </li>
          <li>
            <strong>Community and Connection:</strong> Join our growing
            community of dessert enthusiasts! Share your creations, ask
            questions, and connect with fellow dessert lovers on our social
            media platforms. We're here to celebrate your successes and support
            you through any baking adventures.
          </li>
        </ul>
        <br />
        
        <br />
        <Typography variant="h6" color="#673ab7">
          Get Involved:
        </Typography>
        <p>
          We invite you to explore our recipes, try them in your kitchen, and
          share the joy of baking. Your journey with [Your Website Name] is
          about more than just recipes; it's about creating memories, embracing
          creativity, and savoring the sweetness of life.
        </p>
        <br />
        <Typography variant="subtitle1" color="primary">
          Thank you for being a part of our dessert-loving community!
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
