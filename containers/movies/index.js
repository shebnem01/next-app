import FeaturedMovie from '@/components/featured-movies'
import React from 'react'

const MoviesContainer = ({movie=[]}) => {
  return (
    <FeaturedMovie movie={movie} isCompact={false}/>
  )
}

export default MoviesContainer