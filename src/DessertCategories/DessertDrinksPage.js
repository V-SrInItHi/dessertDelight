import React from 'react';
import Layout from '../Layout/Layout';
import DessertCategories from './DessertCategories';
import RecipeCard from '../Cards/RecipeCard';
import { Grid } from '@mui/material';
 
const DessertsDrinksPage = () => {
  const cards = [
    { id: 1, image: 'https://bakerbynature.com/wp-content/uploads/2021/02/Chocolate-Martini-Recipe-12345-1-of-1.jpg', title: 'Chocolate Martini', description: 'Description for Card 1' },
    { id: 2, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-221128-brandyalexander-093-ls-focusbracket-1670341455.jpg?crop=0.595xw:0.893xh;0.383xw,0.0663xh&resize=1200:*', title: 'Brandy Alexander', description: 'Description for Card 2' },
    { id: 3, image: 'https://www.liquor.com/thmb/wzgqg2FC1Sqbwo_PAJofVVZIMRk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__12__20073201__white-russian-720x720-article-cbe4b9a832c64f8da0bb09407caefa7f.jpg', title: 'Classic White Russian', description: 'Description for Card 3' },
    { id: 4, image: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_10066_90832.jpg', title: 'Mudslide', description: 'Description for Card 4' },
    { id: 5, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-2021-nuttyirishmancocktail-078-1-1615338723.jpg?crop=0.9997369113391213xw:1xh;center,top&resize=980:*', title: 'Nutty Irishman', description: 'Description for Card 5' },
    { id: 6, image: 'https://hips.hearstapps.com/hmg-prod/images/tiramisu-white-russians-1639613119.jpg', title: 'Tiramisu White Russians', description: 'Description for Card 4' },
    { id: 7, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-210111-dalgona-coffee-martini-004-ab-1636006697.jpg?crop=0.447xw:1.00xh;0.207xw,0&resize=980:*', title: 'Dalgona Martini', description: 'Description for Card 5' },
    { id: 8, image: 'https://thegirlinspired.com/wp-content/uploads/2022/05/Pina-Colada-51.jpg', title: 'Piña Colada', description: 'Description for Card 6' },
    { id: 9, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-191908-creme-brulee-martinis-0236-landscape-pf-1566337718.jpg?crop=1.00xw:0.849xh;0,0', title: 'Crème Brûlée Martini', description: 'Description for Card 6' },
    { id: 10, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-pecan-pie-martinis-still001-1540906472.jpg', title: 'Pecan Pie Martini', description: 'Description for Card 1' },
    { id: 11, image: 'https://celebratingsweets.com/wp-content/uploads/2019/04/Grasshopper-Drink-3-480x270.jpg', title: 'Drunk Grasshoppers', description: 'Description for Card 1' },
    { id: 12, image: 'https://hips.hearstapps.com/hmg-prod/images/banana-cream-pie-martini-1649268616.jpeg?crop=0.376xw:1.00xh;0.179xw,0&resize=980:*', title: 'Banana Cream Pie Martini', description: 'Description for Card 2' },
    { id: 13, image: 'https://www.3yummytummies.com/wp-content/uploads/2015/12/Cranberry-Orange-Mimosa-Floats.jpg', title: 'Mimosa Floats', description: 'Description for Card 3' },
    { id: 14, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-191018-bailey-coffee-slushies-0615-landscape-pf-1572635435.jpg?crop=0.8891228070175439xw:1xh;center,top&resize=1200:*', title: 'Baileys Coffee Slushies', description: 'Description for Card 4' },
    { id: 15, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-cadbury-creme-martini-still001-1585151873.jpg?crop=0.708xw:0.709xh;0.151xw,0.177xh', title: 'Cadbury Creme Martini', description: 'Description for Card 5' },
    { id: 16, image: 'https://i.pinimg.com/736x/7b/c3/5c/7bc35caf9fb6fb6fe28ecdd67b007e87.jpg', title: 'Red Wine Milkshakes', description: 'Description for Card 4' },
    { id: 17, image: 'https://www.spicesinmydna.com/wp-content/uploads/2018/06/Boozy-Smores-Shakes-6.jpg', title: "Boozy S'mores Milkshake", description: 'Description for Card 5' },
    { id: 18, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-190903-drunken-peanut-butter-cups-0136-landscape-pf-1568403639.jpg', title: 'Drunken Peanut Butter Cups', description: 'Description for Card 6' },
    { id: 19, image: 'https://hips.hearstapps.com/hmg-prod/images/delish-210310-spiked-coconut-lemonade-008-ab-1617819418.jpg?crop=0.622xw:0.892xh;0.0304xw,0.0552xh&resize=1200:*', title: 'Spiked Coconut Limeade', description: 'Description for Card 6' },
    { id: 20, image: 'https://www.crowdedkitchen.com/wp-content/uploads/2020/12/peppermint-white-russian-5.jpg', title: 'Peppermint White Russian', description: 'Description for Card 1' },

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
    <h2 style={h2Style}>Dessert Drinks</h2>
    <h3 style={h3Style}>"Sip and savor the sweetness – our dessert drinks are a treat for your taste buds."</h3>
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

export default DessertsDrinksPage;
