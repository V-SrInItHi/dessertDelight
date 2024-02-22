import React from'react'
import Layout from '../Layout/Layout'; 
import DessertCategories from '../DessertCategories/DessertCategories';
import PopularImages from '../Popular/PopularImages';
import TrendingImages from '../Trending/TrendingImages';
import CelebrationBakes from '../CelebrationBakes/CelebrationBakesImages';
import SearchBox from '../SearchBox'
import ChefSection from '../Design/ChefSection';

function Home() {
  return (
   
 <Layout>

    
   <TrendingImages/>
   <PopularImages/>

   <div className="explore">
    <h1>EXPLORE HUNDREDS OF RECIPES</h1>
    <h2>Find your new favourite dessert in our amazing collection</h2>
    <SearchBox className="Home-search-bar" />
</div>
<DessertCategories/>
<CelebrationBakes/>
   <ChefSection/>
  
   </Layout>

  );
}

export default Home;
