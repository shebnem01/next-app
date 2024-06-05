import React from "react";
import MoviesContainer from "@/containers/home/movies";
import { notFound } from "next/navigation";
const MoviePage = ({ params, searchParams }) => {
  const movieDetail = params.id;
  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("error happened");
  }
  return <MoviesContainer />;
};

export default MoviePage;
