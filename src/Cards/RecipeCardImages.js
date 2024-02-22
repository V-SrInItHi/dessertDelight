import React from "react";
import { Grid } from '@mui/material';
import RecipeCard from "./RecipeCard";

const RecipeCardImages = () => {
  const cards = [
    { id: 1, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 5', description: 'Description for Card 5' },
    { id: 6, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 6', description: 'Description for Card 4' },
    { id: 7, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 7', description: 'Description for Card 5' },
    { id: 8, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 8', description: 'Description for Card 6' },
    { id: 9, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Card 9', description: 'Description for Card 6' },
  ];

  return (
    <>
  
    <Grid container spacing={2} style={{ padding: '10px' }}>
    {cards.map((card) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={card.id} style={{ display: 'flex', justifyContent: 'center' }}>
        <RecipeCard {...card} favoriteColor="red" viewButtonColor="white" />
      </Grid>
    ))}
  </Grid>
  </>
  );
};

export default RecipeCardImages;