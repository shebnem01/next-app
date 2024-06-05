import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
const MoviesSection = ({ title, movies }) => {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies?.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                unoptimized
                fill
                alt={movie.title}
                src={movie.poster_path}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
