import React from "react";
import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { title, overview } = movie;
  return (
    <div className={styles["movie-wrapper"]}>
      <div className={styles.title}>{title}</div>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {" "}
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playBtn} href={`/movie/${movie.id}`}>Play</Link>
        <button className={styles.addBtn}><FaPlus/></button>
      </div>
      <div className={styles.poster}>
        <div className={styles.posterOverlay}></div>
        <Image unoptimized
          src="https://resizing.flixster.com/6yno1V6oi8gwhPQQ99rQlwYQZP4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI1Mzk5NS53ZWJw"
          alt={title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
