import { useState, useEffect } from "react"
import Slider from "./common/Slider"
import { CategoryMovie, Category } from "src/types"


type CategoryProps = {
    query: () => Promise<Category>;
    title: string
}

const CategorySection = ({ query, title }: CategoryProps) => {
    const [movies, setMovies] = useState<CategoryMovie[]>([])

    useEffect(() => {
        (async() => {
          const data = await query()
          setMovies(data.results)
      })()
    }, [query])

    return (
        <div>
            <Slider movies={movies} title={title} />
        </div>
    )
}

export default CategorySection
