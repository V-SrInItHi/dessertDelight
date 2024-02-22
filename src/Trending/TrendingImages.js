import React from 'react';
import Trending from './Trending';

const imageUrls = [
  'https://www.recipetineats.com/wp-content/uploads/2022/11/Apple-Pie_8.jpg',
  'https://thefitcookie.com/wp-content/uploads/2016/11/Gluten-Free-Cowboy-Cookies-390-EDIT-325x325.jpg',
  'https://mirchi.com/os/cdn/content/images/kaju%20katli%20kandoi%20haribhai_medium_0835206.webp' ,
  'https://www.indianveggiedelight.com/wp-content/uploads/2017/08/rice-kheer-instant-pot-featured-image.jpg',
  'https://static.toiimg.com/thumb/68358712.cms?imgsize=403497&width=800&height=800',
  'https://houseofnasheats.com/wp-content/uploads/2021/03/French-Silk-Pie-18.jpg',
  'https://dinnerthendessert.com/wp-content/uploads/2021/05/Blueberry-Lemon-Cupcakes-11.jpg',
  'https://i0.wp.com/apaigeofpositivity.com/wp-content/uploads/2022/06/Strawberry-Pop-Tarts-6.jpg'
];

const imageNames = ['Apple Pie', 'Wyoming Cowboy Cookies', 'Kaju Katli ', 'Rice Kheer ', 'Ras Malai ','French Silk Pie','Lemon Blueberry Cupcakes','Strawberry Pop-Tart Blondies'];

function TrendingImages() {
  const h1Style = {
    color: 'black',         
    fontSize: '2.5rem',      
    textAlign: 'center',
    fontFamily: 'Monaco,Monospaced'  ,
    paddingTop: '20px',
  };

  const imageNamesStyle = {
    color: 'blue', // Add your preferred color
    fontSize: '15rem', // Add your preferred font size
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif', // Add your preferred font family
    marginTop: '10px', // Add your preferred margin-top
  };

  return (
    <div>
      <h1 style={h1Style}>TRENDING</h1>
      <Trending images={imageUrls} names={imageNames} imageNamesStyle={imageNamesStyle} />
    </div>
  );
}

export default TrendingImages;
