import styles from "./Card.module.css";
import {Link} from "react-router-dom";
export function Card({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
  return (
    <li className={styles.card}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.image}
          src={imageUrl}
          alt={movie.title}
        />
      
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
