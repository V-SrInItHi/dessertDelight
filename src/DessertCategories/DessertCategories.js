import React from 'react';
import { TbBrandCakephp } from 'react-icons/tb';
import { GiJelly } from 'react-icons/gi';
import { IoIceCreamOutline } from 'react-icons/io5';
import { LiaCocktailSolid, LiaSnowflake } from 'react-icons/lia';
import { HiOutlineFire } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

const DessertCategories = () => {
  const location = useLocation();

  const categories = [
    { category: 'Baked Desserts', icon: TbBrandCakephp, path: '/baked-desserts' },
    { category: 'Frozen Desserts', icon: IoIceCreamOutline, path: '/frozen-desserts' },
    { category: 'Dessert Drinks', icon: LiaCocktailSolid, path: '/dessert-drinks' },
    { category: 'Cold Desserts', icon: LiaSnowflake, path: '/cold-desserts' },
    { category: 'Fried Desserts', icon: HiOutlineFire, path: '/fried-desserts' },
    { category: 'Puddings', icon: GiJelly, path: '/puddings' },
  ];

  const categoriesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
  };

  const categoryContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
    padding: '15px',
    cursor: 'pointer',
  };

  return (
    <>
      <h1 style={{ color: 'black', fontSize: '2rem', textAlign: 'center', fontFamily: 'Poppins, sans-serif', paddingTop: '20px' }}>CATEGORIES</h1>

      <div style={categoriesContainerStyle}>
        {categories.map((categoryData, index) => (
          <Link key={index} to={categoryData.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={categoryContainerStyle}>
              {React.createElement(categoryData.icon, { style: { fontSize: '4rem', marginBottom: '10px', color: location.pathname === categoryData.path ? 'white' : 'black' } })}
              <h2 style={{ fontSize: '1rem' }}>{categoryData.category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default DessertCategories;
