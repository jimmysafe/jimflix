
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryMovie } from "src/types";
import Title from "./Title";
import SmallMovieCard from "./SmallMovieCard";

type SliderProps = {
    movies: CategoryMovie[];
    title: string
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    // autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
};

const Slider = ({ movies, title }: SliderProps) => {
      return (
          <div className="container mx-auto py-6">
            <Title text={title}/>
            <SlickSlider {...settings}>
                {movies.map(movie => (
                    <SmallMovieCard key={movie.id} movie={movie}/>
                )) }
            </SlickSlider>
          </div>
      );
}

export default Slider
