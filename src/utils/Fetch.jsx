const API ="https://api.themoviedb.org/3"
    
export function get(path)  {
    return (
        fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTMxMTQ4YjllZjdiYjg2YTJmZTkzYjk5NDFiZWU1ZCIsInN1YiI6IjYyNjQ5NGZhMDkyOWY2MDA2NjlmMDA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVMsdwz3bGDP-uNDJjiY-l-wTfivHswsckWsL7MMh70",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
    )
}