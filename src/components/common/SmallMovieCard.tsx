import { useState } from "react"
import { CategoryMovie } from "src/types"
import SmallMovieCardPreview from "./SmallMovieCardPreview"

type SmallMovieCardProps = {
    movie: CategoryMovie
}

const SmallMovieCard = ({ movie }: SmallMovieCardProps) => {

    const [showModal, setShowModal] = useState<boolean>(false)


    let timeout: any
    const handleShowModal = () => {
        timeout = setTimeout(() => {
            setShowModal(true)
        }, 1000)
    }

    const handleHideModal = () => {
        clearTimeout(timeout)
        setShowModal(false)
    }

    return (
        <div className="px-1 relative cursor-pointer" onMouseEnter={() => handleShowModal()} onMouseLeave={() => handleHideModal()}>

            { showModal && <SmallMovieCardPreview movieId={movie.id} movieTitle={movie.original_title} />}

            <div
                className="bg-cover bg-center bg-no-repeat h-52 rounded "
                style={{
                    backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movie.poster_path}`})`
                }}
            >

            </div>
    </div>
    )
}

export default SmallMovieCard
