import {useTitle, useFetch} from "../hooks"
import {Card} from "../Components"
import {useSearchParams} from "react-router-dom"
export const TvShow = ({api, title}) => {
  const [searchSerie] = useSearchParams()
  searchSerie.get("q")
  //  api fetch hook
  const {MovieData: serieData} = useFetch(api)
  console.log(serieData)
  // title hook
  useTitle(title)
  return (
    <main>
      <section className="max-w-7xl m-auto ">
        <div className="flex gap-3 justify-center flex-wrap">
          {serieData &&
            serieData.map((serie) => {
              return <Card key={serie.id} movie={serie} path={"/serie/"} />
            })}
        </div>
      </section>
    </main>
  )
}
