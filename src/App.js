import React from 'react';
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import BakedDessertsPage from './DessertCategories/BakedDessertsPage';
import FrozenDessertsPage from './DessertCategories/FrozenDessertsPage';
import DessertDrinksPage from './DessertCategories/DessertDrinksPage';
import ColdDessertsPage from './DessertCategories/ColdDessertsPage';
import FriedDessertsPage from './DessertCategories/FriedDessertsPage';
import PuddingsPage from './DessertCategories/PuddingsPage'; 
import RecipeCard from './Cards/RecipeCard';
function App() {
  return (

      
       
          <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        {/* Dessert-related routes */}
        <Route path="/baked-desserts" element={<BakedDessertsPage />} />
        <Route path="/frozen-desserts" element={<FrozenDessertsPage />} />
        <Route path="/dessert-drinks" element={<DessertDrinksPage />} />
        <Route path="/cold-desserts" element={<ColdDessertsPage />} />
        <Route path="/fried-desserts" element={<FriedDessertsPage />} />
        <Route path="/puddings" element={<PuddingsPage />} />
        <Route path="/recipes" component={RecipeCard} />
     
        {/* Add routes for other categories similarly */}
      </Routes>
     
  );
}

export default App;
