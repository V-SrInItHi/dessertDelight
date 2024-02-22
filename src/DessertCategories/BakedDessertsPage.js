import React from 'react';
import Layout from '../Layout/Layout';
import DessertCategories from './DessertCategories';
import RecipeCard from '../Cards/RecipeCard';
import { Grid } from '@mui/material';

const BakedDessertsPage = () => {
  
    const cards = [
      { id: 1, image: './Asserts/BakedDesserts/img 1.jpg', title: 'Giant Buckeye Cookie', description: 'Description for Card 1' },
      { id: 2, image: './Asserts/BakedDesserts/img 2.jpg', title: ' Croissant Bread Pudding', description: 'Description for Card 2' },
      { id: 3, image: './Asserts/BakedDesserts/img 3.jpg', title: 'Mimosa Butter Cookies', description: 'Description for Card 3' },
      { id: 4, image: './Asserts/BakedDesserts/img 4.jpg', title: 'Baklava Cheesecake', description: 'Description for Card 4' },
      { id: 5, image: './Asserts/BakedDesserts/img 5.jpg', title: 'Caramel Snickerdoodle Bars', description: 'Description for Card 5' },
      { id: 6, image: './Asserts/BakedDesserts/img 6.jpg', title: '7UP Pound Cake', description: 'Description for Card 6' },
      { id: 7, image: './Asserts/BakedDesserts/img 7.jpg', title: 'Butterscotch Cake', description: 'Description for Card 7' },
      { id: 8, image: './Asserts/BakedDesserts/img 8.jpg', title: 'Lemon Ricotta Cake', description: 'Description for Card 8' },
      { id: 9, image: './Asserts/BakedDesserts/img 9.jpg', title: "Peanut-Filled Cupcakes", description: 'Description for Card 9' },
      { id: 10, image: './Asserts/BakedDesserts/img 10.jpg', title: 'Margarita Cake', description: 'Description for Card 10' },
      { id: 11, image: './Asserts/BakedDesserts/img 11.jpg', title: 'Cinnamon Bread Pudding', description: 'Description for Card 11' },
      { id: 12, image: './Asserts/BakedDesserts/img 12.jpg', title: 'Heavenly Praline Cake', description: 'Description for Card 12' },
      { id: 13, image: './Asserts/BakedDesserts/img 13.jpg', title: 'Chai-Spiced Bread Pudding', description: 'Description for Card 13' },
      { id: 14, image: './Asserts/BakedDesserts/img 14.jpg', title: 'Spiced Chocolate Molten Cakes', description: 'Description for Card 14' },
      { id: 15, image: './Asserts/BakedDesserts/img 15.jpg', title: 'Banana Bread Pudding', description: 'Description for Card 15' },
      { id: 16, image: './Asserts/BakedDesserts/img 16.jpg', title: 'Cream Cheese Sheet Cake', description: 'Description for Card 16' },
      { id: 17, image: './Asserts/BakedDesserts/img 17.jpg', title: 'Lemon-Lime Bars', description: 'Description for Card 17' },
      { id: 18, image: './Asserts/BakedDesserts/img 18.jpeg', title: 'Red Velvet Cheesecake', description: 'Description for Card 18' },
      { id: 19, image: './Asserts/BakedDesserts/img 19.jpg', title: 'Hummingbird Cupcakes', description: 'Description for Card 19' },
      { id: 20, image: './Asserts/BakedDesserts/img 20.jpg', title: 'Kentucky Butter Cake', description: 'Description for Card 20' },
      { id: 21, image: './Asserts/BakedDesserts/img 21.jpg', title: 'Autumn Apple Torte', description: 'Description for Card 21' },
      { id: 22, image: './Asserts/BakedDesserts/img 22.jpg', title: 'Double Peanut Pie', description: 'Description for Card 22' },
      { id: 23, image: './Asserts/BakedDesserts/img 23.jpg', title: 'Rhubarb Cherry Pie', description: 'Description for Card 23' },
      { id: 24, image: './Asserts/BakedDesserts/img 24.jpg', title: 'Orange Buttermilk Cupcakes', description: 'Description for Card 24' },
      { id: 25, image: './Asserts/BakedDesserts/img 25.jpg', title: 'Jumbo Brownie Cookies', description: 'Description for Card 25' },
      { id: 26, image: './Asserts/BakedDesserts/img 26.jpg', title: 'Strawberry Crunch Poke Cake', description: 'Description for Card 26' },
      { id: 27, image: './Asserts/BakedDesserts/img 27.jpg', title: ' Pineapple Upside-Down Cake', description: 'Description for Card 27' },
      { id: 28, image: './Asserts/BakedDesserts/img 28.jpg', title: 'Carrot Sheet Cake', description: 'Description for Card 28' },
      { id: 29, image: './Asserts/BakedDesserts/img 29.jpg', title: 'Oatmeal Molasses Crisps', description: 'Description for Card 29' },
      { id: 30, image: './Asserts/BakedDesserts/img 30.jpg', title: 'Coconut Tres Leches Cupcakes', description: 'Description for Card 30' },
      { id: 31, image: './Asserts/BakedDesserts/img 31.jpg', title: 'Chocolate Pear Hazelnut Tart', description: 'Description for Card 30' },
      { id: 32, image: './Asserts/BakedDesserts/img 32.jpg', title: 'White Chocolate Cranberry Blondies', description: 'Description for Card 30' },

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
      <h2 style={h2Style}>Baked Desserts</h2>
    <h3 style={h3Style}>"From the oven's embrace to your palate – a journey of sweet enchantment."</h3>
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

export default BakedDessertsPage;