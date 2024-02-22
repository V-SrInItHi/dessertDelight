import React from 'react';
import Popular from './Popular';

const imageUrls = [
  'https://assets.epicurious.com/photos/6492f9ba52adb0cf1d99c8e7/4:3/w_5082,h_3811,c_limit/PhillyFluffCake_RECIPE_061523_55062.jpg',
  'https://www.afarmgirlsdabbles.com/wp-content/uploads/2019/12/toffee_AFarmgirlsDabbles_AFD-1as_feature.jpg',
  'https://assets.epicurious.com/photos/64db975ef54c689f33c0fc55/4:3/w_3668,h_2751,c_limit/Chess-Pie_Recipe_2023-08-10_1518_3x2.jpg',
  'https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/ec2095dc9c43d85d96159ddab5d81789.jpg',
  'https://assets.epicurious.com/photos/64552d8dedf271a5d364ef21/3:2/w_6948,h_4632,c_limit/TiramisuBreakfast_RECIPE_030423_54260.jpg',
  'https://assets.epicurious.com/photos/646fd2011670277e118d66ed/16:9/w_4334,h_2438,c_limit/blueberry-crumble-pie_RECIPE_052423_16469_VOG_final.jpg',
  'https://assets.epicurious.com/photos/64e66d5a8087187f807b5341/4:3/w_4396,h_3297,c_limit/Triple%20Charlotte%20Russe-RECIPE.jpg',
  'https://mayihavethatrecipe.com/wp-content/uploads/2013/07/carrot-coconut-granita-620x567.jpg'
];

const imageNames = ['Philly Fluff Cake', 'Butter Toffee Bars', 'Chess Pie', 'Pumpkin Roll With Cream Cheese Filling', 'Tiramisu Bundt Cake', 'Blueberry Crumble Pie', 'Triple Charlotte Russe', 'Granita'];

const NameWithStyle = ({ name, style }) => <div style={style}>{name}</div>;

function PopularImages() {
  const h1Style = {
    color: 'black',
    fontSize: '2.5rem',
    textAlign: 'center',
    fontFamily: 'Monaco, Monospaced',
    paddingTop: '20px',
  };

  const nameStyle = {
    color: 'black',
    fontSize: '1.2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '10px 30px',
  };

  return (
    <div>
      <h1 style={h1Style}>POPULAR</h1>
      <Popular images={imageUrls} names={imageNames.map(name => <NameWithStyle key={name} name={name} style={nameStyle} />)} />
    </div>
  );
}

export default PopularImages;
