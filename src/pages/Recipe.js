
import Layout from '../Layout/Layout'
import React from 'react'
import SearchBox from '../SearchBox'
import RecipeCardImages from '../Cards/RecipeCardImages'
function Recipe() {
  return (
    <Layout>
    <h1>RECIPE</h1>
   <SearchBox/>
   <RecipeCardImages/>
    </Layout>
  )
}

export default Recipe