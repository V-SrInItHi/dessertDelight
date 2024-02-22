import React from 'react';
import Layout from '../Layout/Layout';
import RecipeCard from '../Cards/RecipeCard';
import { Grid } from '@mui/material';
import DessertCategories from './DessertCategories';

const ColdDessertsPage = () => {
  const cards = [
    
      { id: 1, image: './Asserts/ColdDesserts/img 1.jpg', title: 'Blueberry ice cream cake', description: 'Description for Card 1' },
      { id: 2, image: './Asserts/ColdDesserts/img 2.jpg', title: 'Chocolate sorbet', description: 'Description for Card 1' },
      { id: 3, image: './Asserts/ColdDesserts/img 3.jpg', title: 'Yoghurt and buttermilk panna cotta', description: 'Description for Card 1' },
      { id: 4, image: './Asserts/ColdDesserts/img 4.jpg', title: 'Peanut brittle ice cream and popcorn sundae', description: 'Description for Card 1' },
      { id: 5, image: './Asserts/ColdDesserts/img 5.jpg', title: 'Frozen lamingtons with raspberries', description: 'Description for Card 1' },
      { id: 6, image: './Asserts/ColdDesserts/img 6.jpg', title: 'Cherry ripple ice cream', description: 'Description for Card 1' },
      { id: 7, image: './Asserts/ColdDesserts/img 7.jpg', title: 'Lemon sorbet and burnt orange sandwiche', description: 'Description for Card 1' },
      { id: 8, image: './Asserts/ColdDesserts/img 8.jpg', title: 'Berry and meringue ice cream slice', description: 'Description for Card 1' },
      { id: 9, image: './Asserts/ColdDesserts/img 9.jpg', title: 'White chocolate and peach trifle', description: 'Description for Card 1' },
      { id: 10, image: './Asserts/ColdDesserts/img 10.jpg', title: 'Chocolate pots with salted caramel toffee', description: 'Description for Card 1' },
      { id: 11, image: './Asserts/ColdDesserts/img 11.jpg', title: 'Strawberry and grappa sorbetto with wafers', description: 'Description for Card 1' },
      { id: 12, image: './Asserts/ColdDesserts/img 12.jpg', title: 'Spiced ice-cream cake with caramel figs', description: 'Description for Card 1' },
      { id: 13, image: './Asserts/ColdDesserts/img 13.jpg', title: 'Pomegranate, vodka and violet granita', description: 'Description for Card 1' },
      { id: 14, image: './Asserts/ColdDesserts/img 14.jpg', title: 'Mango ice cream layer cake with chilled lime caramel', description: 'Description for Card 1' },
      { id: 15, image: './Asserts/ColdDesserts/img 15.jpg', title: 'Honey panna cotta', description: 'Description for Card 1' },
      { id: 16, image: './Asserts/ColdDesserts/img 16.jpg', title: 'Butterscotch sauce with burnt-butter bananas and ice cream', description: 'Description for Card 1' }
    
      ];
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
      <h2 style={h2Style}>Cold Desserts</h2>
    <h3 style={h3Style}>"Indulge in a symphony of flavors and textures with our exquisite selection of puddings – a delightful journey into the world of sweet, creamy perfection."</h3>
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

export default ColdDessertsPage;
