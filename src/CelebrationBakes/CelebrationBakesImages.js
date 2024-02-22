import React from 'react';
import CelebrationBakes from './CelebrationBakes';

const imageUrls = [
  
  'https://recipes.net/wp-content/uploads/2023/07/cassata-siciliana-recipe-1689076647.jpg',
  'https://img.taste.com.au/qdWMGgPz/taste/2016/11/not-so-fried-ice-cream-95614-1.jpeg',
  'https://img.taste.com.au/jtlZFrQs/taste/2017/09/baked-honey-cheesecake-130443-1.jpg' ,
 ' https://www.indianveggiedelight.com/wp-content/uploads/2017/08/rice-kheer-instant-pot-featured-image.jpg',
'https://img.taste.com.au/0LMVSO-9/taste/2016/11/cinnamon-honey-creme-brulee-74701-1.jpeg',
'https://houseofnasheats.com/wp-content/uploads/2021/03/French-Silk-Pie-18.jpg',
'https://dinnerthendessert.com/wp-content/uploads/2021/05/Blueberry-Lemon-Cupcakes-11.jpg',
'https://i0.wp.com/apaigeofpositivity.com/wp-content/uploads/2022/06/Strawberry-Pop-Tarts-6.jpg'
];
const imageNames = ['Cassata', 'Not-so fried icecream', 'Honey cheesecake ', 'Rice Kheer ', 'Cinnamon-honey creme brulee','French Silk Pie','Lemon Blueberry Cupcakes','Strawberry Pop-Tart Blondies'];

  

function CelebrationBakesImages() {
  const h1Style = {
    color: 'black',         
    fontSize: '2.5rem',      
    textAlign: 'center',
    fontFamily: 'Monaco,Monospaced'  ,
    paddingTop: '20px',
  };
  
  return (
    <div>
      <h1 style={h1Style}>CELEBRATION BAKES</h1>
   
      <CelebrationBakes images={imageUrls} names={imageNames} />
    </div>
  );
}

export default CelebrationBakesImages; 