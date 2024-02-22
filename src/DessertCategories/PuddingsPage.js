import React from 'react';
import Layout from '../Layout/Layout';
import RecipeCard from '../Cards/RecipeCard';
import { Grid } from '@mui/material';
import DessertCategories from './DessertCategories';

const PuddingsPage = () => {

  const cards = [
  
          { id: 1, image: './Asserts/Pudding/img 1.jpg', title: 'Butterscotch Pudding', description: 'Description for Card 1' },
          { id: 2, image: './Asserts/Pudding/img 2.jpg', title: 'Chocolate Pudding Pie', description: 'Description for Card 1' },
          { id: 3, image: './Asserts/Pudding/img 3.jpg', title: 'Salted Caramel Kahlua Pudding', description: 'Description for Card 1' },
          { id: 4, image: './Asserts/Pudding/img 4.jpg', title: 'Rice Pudding', description: 'Description for Card 1' },
          { id: 5, image: './Asserts/Pudding/img 5.jpg', title: 'Coconut Chia Pudding', description: 'Description for Card 1' },
          { id: 6, image: './Asserts/Pudding/img 6.jpg', title: 'Roasted Banana Pudding', description: 'Description for Card 1' },
          { id: 7, image: './Asserts/Pudding/img 7.jpg', title: 'Strawberry Pudding', description: 'Description for Card 1' },
          { id: 8, image: './Asserts/Pudding/img 8.jpg', title: 'Coffee Pudding', description: 'Description for Card 1' },
          { id: 9, image: './Asserts/Pudding/img 9.jpg', title: 'Cheesecake Pudding', description: 'Description for Card 1' },
          { id: 10, image: './Asserts/Pudding/img 10.jpg', title: 'Lemon Coconut Pudding', description: 'Description for Card 1' },
          { id: 11, image: './Asserts/Pudding/img 11.jpg', title: 'Chocolate Chia Seed Pudding', description: 'Description for Card 1' },
          { id: 12, image: './Asserts/Pudding/img 12.jpg', title: 'Pumpkin Pudding', description: 'Description for Card 1' },
          { id: 13, image: './Asserts/Pudding/img 13.jpg', title: 'Pistachio Pudding', description: 'Description for Card 1' },
          { id: 14, image: './Asserts/Pudding/img 14.jpg', title: 'Tapioca Pudding', description: 'Description for Card 1' },
          { id: 15, image: './Asserts/Pudding/img 15.jpg', title: 'Chocolate Malted Pudding', description: 'Description for Card 1' },
          { id: 16, image: './Asserts/Pudding/img 16.jpg', title: 'Key Lime Pudding', description: 'Description for Card 1' },
      ]
          
      
    
  const h2Style = {
    color: 'black', 
    fontFamily: 'Georgia,Serif  ', 
    fontSize: '2.5rem', 
    textAlign:"center",
    paddingTop:'2rem'
  };
  const h3Style = {
    color: 'black',
    fontFamily: 'Georgia, Serif',
    fontSize: '1rem',
    textAlign: 'center',
    fontWeight: 'light',
    paddingTop:"1.5rem" // Set the font weight to thin
  };

  return (
    <Layout>
    <DessertCategories/>
    <h2 style={h2Style}>Puddings & Custurds</h2>
    <h3 style={h3Style}>"Smooth as silk, rich as dreams – our puddings and custards are crafted for ultimate dessert bliss."</h3>
  <Grid container spacing={2} style={{ padding: '10px' }}>
  {cards.map((card) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={card.id} style={{ display: 'flex', justifyContent: 'center' }}>
      <RecipeCard {...card} favoriteColor="black" viewButtonColor="black" />
    </Grid>
  ))}
</Grid>
</Layout>
  );
};

export default PuddingsPage;
