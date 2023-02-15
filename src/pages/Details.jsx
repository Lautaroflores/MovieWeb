import movie from "./movie.json"
import styles from "../components/Details.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/Fetch"
import { Spinner } from "../components/Spinner";

export function Details() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true);

        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setLoading(false);
        })
    }, [movieId])

    if (loading) {
        return <Spinner/>
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    return (
    <div className={styles.detailsContainer} >
        <img className={`${styles.col} ${styles.movieImage}`}src={imageUrl} alt={movie.title} />
        <div className={styles.col}>
            <p><strong>Title:</strong>  {movie.title}</p>
            <p>  <strong>Genres: </strong>{movie.genres.map(genre=>genre.name).join(", ")}</p>
            <p><strong>Description:</strong>  {movie.overview}</p>
        
        </div>
            
    </div>
    )
    
}