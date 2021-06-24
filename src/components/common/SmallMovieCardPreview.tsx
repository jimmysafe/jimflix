import { useEffect, useState } from "react"
import { Movie } from "src/types"
import { getMovie } from "src/utils/queries"
import YouTube from 'react-youtube';


type SmallMovieCardPreviewProps = {
    movieId: number,
    movieTitle: string
}

const _onReady = (e: any) => {
    e.target.playVideo();
}

const SmallMovieCardPreview = ({ movieId }: SmallMovieCardPreviewProps) => {

    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        (async() => {
          const data = await getMovie(movieId)
          setMovie(data)
      })()
        return () => {
            setMovie(null)
        }
    }, [movieId])

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-black rounded">
                <YouTube
                    containerClassName="w-full md:max-w-2xl"  
                    className="w-full"
                    videoId={movie?.videos.results[0].key}
                    opts={{
                        height: '210',
                        width: '640',
                        playerVars: { autoplay: 1, controls: 0 }
                    }}
                    onReady={_onReady}
                />
        </div>
    )
}

export default SmallMovieCardPreview
