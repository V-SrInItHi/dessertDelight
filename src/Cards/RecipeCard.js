import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

const RecipeCard = ({ image, title, description, id, favoriteColor, viewButtonColor }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card style={{ width: '100%', margin: '30px', borderRadius: '10px' }}>
      <CardMedia
        component="img"
        alt={title}
        height="270px"
        image={image}
        style={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <IconButton onClick={handleFavoriteClick}>
          {isFavorite ? (
            <FavoriteIcon style={{ color: 'pink', fontSize: '2rem' }} />
          ) : (
            <FavoriteBorderIcon style={{ fontSize: '2rem', color: 'black' }} />
          )}
        </IconButton>
        <Button
          variant="contained"
          style={{ color: viewButtonColor }}
          component={Link}
          to={`/details/${id}`}
        >
          <VisibilityIcon />
          View
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
