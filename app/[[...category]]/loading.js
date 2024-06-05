import CategoriesLoading from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movies/loading'
import React from 'react'

const Loading = () => {
  return (
   <>
    <CategoriesLoading/>
    <FeaturedMovieLoading/>
   </>
  )
}

export default Loading