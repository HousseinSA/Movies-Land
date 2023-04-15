import React from "react"
import {useFetch, useTitle} from "../hooks"
import {useSearchParams} from "react-router-dom"
import {Card} from "../Components"
export const Search = ({api, location}) => {
  const [searchParmas] = useSearchParams()
  const querySearch = searchParmas.get("q")
  const {MovieData} = useFetch(api, querySearch, location)
  useTitle(`Search: ${querySearch}`)
console.log(location)
  console.log(MovieData)
  return (
    <main>
      <section>
        <div className="text-slate-700 dark:text-white text-3xl py-4 ">
          <p>
            {MovieData.length === 0
              ? `No result found for "${querySearch}"`
              : `Results for "${querySearch}"`}
          </p>
        </div>
      </section>
      <section className="max-w-7xl m-auto">
        <div className="flex gap-3 justify-center flex-wrap">
          {MovieData &&
            MovieData.map((movie) => {
              return <Card key={movie.id} movie={movie} location={location} />
            })}
        </div>
      </section>
    </main>
  )
}
