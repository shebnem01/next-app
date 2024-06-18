import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movies";
import MoviesSection from "@/components/movies-section";
import React from "react";

const HomeContainer = ({ selectedCategory, popularMovies = [] }) => {
  return (
    <>
      <FeaturedMovie movie={popularMovies[0]} />
      <Categories categories={popularMovies} />
      {selectedCategory.length > 0 && (
        <MoviesSection title="Popular films" movies={selectedCategory.movies} />
      )}
      <MoviesSection title="Popular films" />
      <MoviesSection title="Your favorites" />
    </>
  );
};

export default HomeContainer;
