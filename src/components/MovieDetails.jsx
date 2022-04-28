import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const MovieDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

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
                <Col className="col-12" style={{display: "flex", justifyContent: "center"}}>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={selectedMovie.Poster} />
  <Card.Body>
    <Card.Title>{selectedMovie.Title}</Card.Title>
    <Card.Text>
            {selectedMovie.Writer}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Year: {selectedMovie.Year}</ListGroupItem>
    <ListGroupItem>Actors: {selectedMovie.Actors}</ListGroupItem>
    <ListGroupItem>imdbRating: {selectedMovie.imdbRating}</ListGroupItem>
  </ListGroup>
  <Card.Body>
      <Link to="/">
    <Button variant="primary">Take me back please</Button>
    </Link>
  </Card.Body>
</Card>
                </Col>
            </Row>
        </Container>
            )
}

export default MovieDetails