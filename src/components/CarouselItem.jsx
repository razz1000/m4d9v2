import { Component } from "react";
import {Col, Card} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"


let CarouselItem = (props) => {
const navigate = useNavigate()

let showCard = () => {
  console.log("This is the movie" + props.movie.imdbID) 
  navigate('/moviedetails/' + props.movie.imdbID)
}

        return(

            <Col col={2}>
        <Card onClick={showCard}>
          <img
          width="200px"
          height="500px"
            src={props.movie.Poster}
            className="card-img-top"
            alt="..."

          />
        </Card>
    </Col>
        )
    
}

export default CarouselItem