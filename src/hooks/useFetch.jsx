import {useState, useEffect} from "react"
export const useFetch = (api, querySearch = "", location) => {
  const [MovieData, setMovieData] = useState([])
  const [error, setError] = useState()
  const apiUrl = () => {
    if (location === "/shows/upcoming" || location === "/shows/popular") {
      return `https://api.themoviedb.org/3/search/tv?api_key=2937fadbed7c5cedfea486f648195bb7&query=${querySearch}&language=en-US`
    } else {
      return `https://api.themoviedb.org/3/${api}?api_key=2937fadbed7c5cedfea486f648195bb7&query=${querySearch}&language=en-US`
    }
  }
  console.log(apiUrl())
  useEffect(() => {
    async function fetchMovies() {
      try {
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
      } catch (error) {
        console.log(error.message)
        setError(error.message)
      }
    }
    fetchMovies()
    localStorage.setItem("movieList", JSON.stringify(MovieData))
  }, [api, querySearch])
  return {MovieData, error}
}
