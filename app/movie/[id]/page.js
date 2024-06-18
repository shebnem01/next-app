import React from "react";
import MoviesContainer from "@/containers/movies";
import { notFound } from "next/navigation";
const MoviePage = ({ params, searchParams }) => {
  const Movies=[];
  const movieDetail = Movies.results.find(movie=>movie.id.toString()==params.id)
  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("error happened");
  }
  return <MoviesContainer movie={movieDetail} />;
};

export default MoviePage;
