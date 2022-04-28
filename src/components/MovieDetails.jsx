import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Card, ListGroup, ListGroupItem, Button, Badge} from "react-bootstrap"
import {Link} from "react-router-dom"

const MovieDetails = () => {
    const params = useParams()


    const [selectedMovie, setSelectedMovie] = useState([])
    
    useEffect(() => {
        getMovieDetails()

    }, []) 



    const getMovieDetails = async () => {
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=593bbdc9&i=" + params.movieID)
        if (response.ok) {
            const parsedBody = await response.json();
            console.log("Hey there this is the parsed body" + parsedBody)
            console.log(parsedBody)
            
            setSelectedMovie(parsedBody);


        }
    } catch (error) {
        console.log(error)
    }
    }

    return (
        <Container>
            <Row className="justify-content-center my-3">
                <Col className="col-10" style={{display: "flex", justifyContent: "center"}}>
                <Card >
  <Card.Img variant="top" src={selectedMovie.Poster} />
  <Card.Body>
    <Card.Title>{selectedMovie.Title}   <Badge variant="warning">imdb Rating: {selectedMovie.imdbRating}</Badge>      </Card.Title>
    <Card.Text>
 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Year:<Badge pill variant="secondary">
    {selectedMovie.Year}
  </Badge></ListGroupItem>
    <ListGroupItem>Actors: {selectedMovie.Actors}</ListGroupItem>
    <ListGroupItem>Money generated:  <Badge pill variant="success">
    {selectedMovie.BoxOffice}
  </Badge></ListGroupItem>
  </ListGroup>
  <Card.Body>
      <Link to="/">
    <Button variant="success" size="lg" block>Take me back please</Button>
    </Link>
  </Card.Body>
</Card>
                </Col>
            </Row>
        </Container>
            )
}

export default MovieDetails