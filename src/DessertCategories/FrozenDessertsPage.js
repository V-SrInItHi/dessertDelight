import React from 'react';
import RecipeCard from '../Cards/RecipeCard';
import { Grid } from '@mui/material';
import DessertCategories from './DessertCategories';
import Layout from '../Layout/Layout';

const FrozenDessertsPage = () => {
  const cards = [
    { id: 1, image: './Asserts/FrozenDesserts/img 1.jpg', title: 'Swirled Blueberry Frozen Yogurt', description: 'Description for Card 1' },
    { id: 2, image: './Asserts/FrozenDesserts/img 2.jpg', title: 'Jackfruit–Ginger Ale Sorbet', description: 'Description for Card 2' },
    { id: 3, image: './Asserts/FrozenDesserts/img 3.jpg', title: 'Cake Freezer Pops', description: 'Description for Card 3' },
    { id: 4, image: './Asserts/FrozenDesserts/img 4.jpg', title: 'Patriotic Frozen Delight', description: 'Description for Card 4' },
    { id: 5, image: './Asserts/FrozenDesserts/img 5.jpg', title: 'Strawberry Shortbread Dessert', description: 'Description for Card 5' },
    { id: 6, image: './Asserts/FrozenDesserts/img 6.jpg', title: 'Crunchy Chocolate Mint Balls', description: 'Description for Card 4' },
    { id: 7, image: './Asserts/FrozenDesserts/img 7.jpg', title: 'Root Beer Float Pie', description: 'Description for Card 5' },
    { id: 8, image: './Asserts/FrozenDesserts/img 8.jpg', title: 'Ice Cream Balls', description: 'Description for Card 6' },
    { id: 9, image: './Asserts/FrozenDesserts/img 9.jpg', title: 'Toffee-Peach Ice Cream Pie', description: 'Description for Card 6' },
    { id: 10, image: './Asserts/FrozenDesserts/img 10.jpg', title: 'Frozen Banana Split Pie', description: 'Description for Card 6' },
    { id: 11, image: './Asserts/FrozenDesserts/img 11.jpg', title: 'Cereal Ice Cream Sandwich', description: 'Description for Card 1' },
    { id: 12, image: './Asserts/FrozenDesserts/img 12.jpg', title: 'Frozen Pumpkin Dessert', description: 'Description for Card 2' },
    { id: 13, image: './Asserts/FrozenDesserts/img 13.jpg', title: 'Frozen Berry & Yogurt Swirls', description: 'Description for Card 3' },
    { id: 14, image: './Asserts/FrozenDesserts/img 14.jpg', title: 'Ice Cream Cookie Dessert', description: 'Description for Card 4' },
    { id: 15, image: './Asserts/FrozenDesserts/img 15.jpg', title: 'Chocolate Hazelnut Soy Pops', description: 'Description for Card 5' },
    { id: 16, image: './Asserts/FrozenDesserts/img 16.jpg', title: 'Watermelon Lemon Cream Tarts', description: 'Description for Card 4' },
    { id: 17, image: './Asserts/FrozenDesserts/img 17.jpg', title: 'Rocky Road Fudge Pops', description: 'Description for Card 5' },
    { id: 18, image: './Asserts/FrozenDesserts/img 18.jpg', title: ' Bananas Foster', description: 'Description for Card 6' },
    { id: 19, image: './Asserts/FrozenDesserts/img 19.jpg', title: 'Creamy Coffee Pie', description: 'Description for Card 6' },
    { id: 20, image: './Asserts/FrozenDesserts/img 20.jpg', title: 'Pineapple-Coconut Ice Cream', description: 'Description for Card 6' },
    { id: 21, image: './Asserts/FrozenDesserts/img 21.jpg', title: 'Pecan Ice Cream Bonbons', description: 'Description for Card 1' },
    { id: 22, image: './Asserts/FrozenDesserts/img 22.jpg', title: 'Icebox Sandwich', description: 'Description for Card 2' },
    { id: 23, image: './Asserts/FrozenDesserts/img 23.jpg', title: 'Frozen Creme Caramel', description: 'Description for Card 3' },
    { id: 24, image: './Asserts/FrozenDesserts/img 24.jpg', title: 'Berry White Ice Pops', description: 'Description for Card 4' },
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
      <h2 style={h2Style}>Frozen Desserts</h2>
    <h3 style={h3Style}>"Freeze the moment with our icy confections – where sweetness meets the chill factor."</h3>
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

export default FrozenDessertsPage;
