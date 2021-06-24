import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Beers from "./components/Beers";
import BeerDeets from "./components/BeerDetails";
import "./App.css";

export default function App() {
  const [beerId, setBeerId] = useState();

  return (
    <Container>
      <Row>
        <Col>
          <Beers setBeerId={setBeerId} />
          <BeerDeets beerId={beerId} />
        </Col>
      </Row>
    </Container>
  );
}
