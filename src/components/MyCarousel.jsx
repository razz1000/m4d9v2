import { Component } from "react";
import { Carousel } from "react-bootstrap";
import CarouselRow from "./CarouselRow";
import {useNavigate } from "react-router-dom"

class MyCarousel extends Component {
  state = {
    movies: [],
    activeSlide:0,
    selectedMovie: ""
  };

  componentDidMount = () => {
    this.fetchData();
  };
/* 
  changeSlide = (selected) => {
    this.setState({activeSlide:selected})
  }
 */
  fetchData = async () => {
    try {

        const selectedMovie = this.props.movie

      const response = await fetch(
        "http://www.omdbapi.com/?apikey=6e593066&s=" + selectedMovie
      );
      if (response.ok) {
        const body = await response.json();
        console.log(body);

        this.setState({
          movies: body.Search,
          selectedMovie: selectedMovie
        });
      } else {
        console.log("problem while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h2>{this.props.heading}</h2>
        <div>


          <Carousel /* activeIndex={this.state.activeSlide} */ /* onSelect={this.changeSlide} */>
            <Carousel.Item /* selectedMovie={this.selectedMovie} */>
              <CarouselRow
                
                movies={this.state.movies.slice(0, 6)}



              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselRow movies={this.state.movies.slice(4, 10)} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default MyCarousel;
