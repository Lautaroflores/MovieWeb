import { Card } from "./Card";
import styles from "./Grid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/Fetch";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { NoResults } from "./NoResults";

export function Grid({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat (data.results));
      setHasMore(data.page < data.total_pages);
      setLoading(false);
    });
  }, [search, page]);

if (!loading && movies.length === 0){
  return <NoResults/>
}


  return (
    <InfiniteScroll
    dataLength={movies.length} 
    next={()=> setPage ((prevPage) => prevPage + 1 )}
    hasMore={hasMore}
    loader={<Spinner/>}>

      <ul className={styles.grid}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>

    </InfiniteScroll>
  );
}
