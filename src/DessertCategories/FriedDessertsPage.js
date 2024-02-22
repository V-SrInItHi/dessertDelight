import React from 'react';
import Layout from '../Layout/Layout';
import DessertCategories from './DessertCategories';
import RecipeCard from '../Cards/RecipeCard';
import { Grid } from '@mui/material';

const FriedDessertsPage = () => {

    const cards = [
        { id: 1, image: 'https://familydinners.com/wp-content/uploads/2022/02/Deep-Fried-SMores-19.jpg', title: ' Deep-Fried S’Mores', description: ' 1' },
        { id: 2, image: 'https://www.sugarandsoul.co/wp-content/uploads/2022/05/fried-cheesecake-bites-2.jpg', title: ' Deep-Fried Cheesecake Bites', description: 'Description for Card 2' },
        { id: 3, image: 'https://www.dinneratthezoo.com/wp-content/uploads/2020/01/fried-twinkies-5.jpg', title: ' Fried Twinkies', description: 'Description for Card 3' },
        { id: 4, image: 'https://www.thecookierookie.com/wp-content/uploads/2016/01/fried-brownie-truffle-bites-1-of-1.jpg', title: 'Fried Brownie Truffle Bites', description: 'Description for Card 4' },
        { id: 5, image: 'https://keepingitrelle.com/wp-content/uploads/2020/02/Malasadas-11.jpg', title: ' Malasadas', description: 'Description for Card 5' },
        { id: 6, image: 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2021/08/Apple-Fritters-4-1.jpg?fit=1200%2C1200&ssl=1', title: 'Deep-Fried Apple Fritters', description: 'Description for Card 4' },
        { id: 7, image: 'https://tornadoughalli.com/wp-content/uploads/2021/12/BAKED-DONUT-HOLES-FINALS-2-1-500x375.jpg', title: ' Fried Donut Holes', description: 'Description for Card 5' },
        { id: 8, image: 'https://www.recipetineats.com/wp-content/uploads/2016/08/Churros_9-SQ.jpg', title: ' Churro Bites', description: 'Description for Card 6' },
        { id: 9, image: 'https://houseofnasheats.com/wp-content/uploads/2022/03/Mexican-Fried-Ice-Cream-1.jpg', title: ' Fried Ice Cream', description: 'Description for Card 6' },
        { id: 10, image: 'https://latinafy.com/cdn/shop/articles/what_are_pastelitos_1260x630.webp?v=1684437439', title: 'Pastelitos Criollos', description: 'Description for Card 1' },
        { id: 11, image: 'https://realgreekrecipes.com/wp-content/uploads/2021/12/Best-Diples-Recipe-Greek-Fried-Dough.jpg', title: 'Diples', description: 'Description for Card 1' },
        { id: 12, image: 'https://www.chefajaychopra.com/assets/img/recipe/1-1666076526HalwaiStyleBalushahiwebp.webp', title: ' Balushahi', description: 'Description for Card 2' },
        { id: 13, image: 'https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg', title: ' Gulab jamun', description: 'Description for Card 3' },
        { id: 14, image: 'https://thumbs.dreamstime.com/z/aasmi-traditional-sri-lankan-deep-fried-sweet-snack-which-served-aluth-avurudda-puthandu-sinhalese-tamil-new-years-264724961.jpg', title: 'Aasmi', description: 'Description for Card 4' },
        { id: 15, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: ' Glittered Sufganiyot', description: 'Description for Card 5' },
        { id: 16, image: 'https://www.justataste.com/wp-content/uploads/2014/02/easy-chocolate-wontons-580x875.jpg', title: 'Chocolate-filled Wontons', description: 'Description for Card 4' },
        { id: 17, image: 'https://www.thespruceeats.com/thmb/7nSJq1_rk5wZcoX02eHwJmB-2R8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1097369340-5c8fdbee46e0fb00015558cf.jpg', title: ' Picarones', description: 'Description for Card 5' },
        { id: 18, image: 'https://www.shutterstock.com/image-photo/modern-dessert-blackberry-cream-pudding-600nw-2366565179.jpg', title: 'Oliebollen', description: 'Description for Card 6' },
        { id: 19, image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/chiacchiere-Italian-fried-pastries-1200x675.jpeg', title: 'Chiacchiere', description: 'Description for Card 6' },
        { id: 20, image: 'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2023/10/Instant-Jalebi-H1.jpg?fit=600%2C904&ssl=1', title: ' Jalebi', description: 'Description for Card 1' },

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
      <h2 style={h2Style}>Fried Desserts</h2>
    <h3 style={h3Style}>"Golden, crispy, and oh-so-sweet – our fried desserts are a symphony for your senses."</h3>
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

export default FriedDessertsPage;
