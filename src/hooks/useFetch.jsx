import {useState, useEffect} from "react"
export const useFetch = (api, querySearch = "", location, changing) => {
  const [MovieData, setMovieData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const apiUrl = () => {
    if (location === "/shows/top-rated" || location === "/shows/popular") {
      return `https://api.themoviedb.org/3/search/tv?api_key=2937fadbed7c5cedfea486f648195bb7&query=${querySearch}&language=en-US`
    } else {
      return `https://api.themoviedb.org/3/${api}?api_key=2937fadbed7c5cedfea486f648195bb7&query=${querySearch}&language=en-US`
    }
  }
  useEffect(() => {
    async function fetchMovies() {
      try {
        setTimeout(async () => {
          const response = await fetch(apiUrl())
          if (!response.ok) {
            throw new Error()
          }
          const data = await response.json()
          if (Array.isArray(data.results)) {
            setMovieData(data.results)
          } else if (typeof data === "object") {
            setMovieData(data)
          }
        }, 1000)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchMovies()
    localStorage.setItem("movieList", JSON.stringify(MovieData))
  }, [api, querySearch, changing, MovieData,apiUrl ])
  return {MovieData, error, loading}
}
