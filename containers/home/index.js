import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movies";
import MoviesSection from "@/components/movies-section";
import React from "react";

const HomeContainer = () => {
  return (
    <>
      <FeaturedMovie />
      <Categories />
      <MoviesSection/>
    </>
  );
};

export default HomeContainer;
