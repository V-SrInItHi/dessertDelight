import React from 'react';
import { Fade } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'; // Import the default styles

const slideImages = [
  {
    url: 'https://burst.shopifycdn.com/photos/berry-cheesecake.jpg?width=1000&format=pjpg&exif=0&iptc=0',
    caption: 'The Dessert You Deserve',
    
  },
  {
    url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    caption: 'Self-Love That Comes In A Box.'
  },
  {
    url: 'https://ak.picdn.net/offset/photos/5fedf8436f52af4409f035cb/medium/offset_1068244.jpg',
    caption: 'Sweetness Never Tasted This Good'
  },
  {
    url: 'https://static.vecteezy.com/system/resources/thumbnails/028/646/560/small_2x/gourmet-dessert-high-quality-dish-molecular-cuisine-close-up-photo.jpg',
    caption: 'Sweetness Never Tasted This Good'
  },
 
 
];

const divStyle = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  height: '400px',
  backgroundSize: 'contain',
  position: 'relative',
  float: 'left', /* Make sure each slide is floated to the left */
  width: '100%'
};
const spanStyle={
  fontSize:"20px",
   color:"white",
}


export default function ImageSlider() {
  return (
    <div className='slide-container' >
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
            <span style={spanStyle}>{image.caption}</span>
          </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}