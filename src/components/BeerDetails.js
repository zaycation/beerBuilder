import React from "react";
import { useQuery } from "react-query";
import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
//import PulseLoader from "react-spinners/PulseLoader";

function BreedDetails({ beerId }) {
  const {
    isLoading,
    error,
    data: beer,
  } = useQuery(["beer", beerId], () =>
    fetch(`https://api.punkapi.com/v2/beers/${beerId}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    //console.log(process.env);
    return <p>Select a beer above!</p>;
  } else if (error) {
    return "Error!!";
  }

  if (beerId) {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card className="my-5">
                <Card.Body>
                  <h3>{beer[0].name}</h3>
                  <h6>{beer[0].tagline}</h6>
                  <Card.Text>
                    ABV : {beer[0].abv}% | IBU: {beer[0].ibu} | pH: {beer[0].ph}
                  </Card.Text>
                  <h5>Recommended Food Pairings:</h5>
                  <ul>
                    <li>{beer[0].food_pairing[0]}</li>
                    <li>{beer[0].food_pairing[1]}</li>
                    <li>{beer[0].food_pairing[2]}</li>
                  </ul>

                  <h5>Beer Description:</h5>
                  <Card.Text>{beer[0].description}</Card.Text>
                  <h5>Ingredients:</h5>
                  <Card.Text>Yeast: {beer[0].ingredients.yeast}</Card.Text>
                  <Card.Text>
                    Malt:
                    <ul>
                      {beer[0].ingredients.malt.map((item) => (
                        <li>
                          {item.amount.value}kg {item.name}
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    Hops:
                    <ul>
                      {beer[0].ingredients.hops.map((item) => (
                        <li>
                          {item.amount.value}g {item.name} ({item.attribute}){" "}
                          <Badge variant="info">{item.add}</Badge>{" "}
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="d-flex align-items-center justify-content-center">
                <Image fluid src={beer[0].image_url} rounded />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    return (
      <Card className="my-5">
        <Card.Body>
          <Card.Title>Beer Name</Card.Title>
          <Card.Text>Beer Tagline</Card.Text>
          <Card.Text>ABV% | IBU | pH</Card.Text>
          <Card.Text>Beer Description</Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://via.placeholder.com/350x150" />
      </Card>
    );
  }
}

export default BreedDetails;
