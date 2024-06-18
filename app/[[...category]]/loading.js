import CategoriesLoading from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movies/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'
import React from 'react'

const Loading = () => {
  return (
   <>
    <CategoriesLoading/>
    <FeaturedMovieLoading/>
    <MoviesSectionLoading/>
    <MoviesSectionLoading/>
    <MoviesSectionLoading/>
   </>
  )
}

export default Loading