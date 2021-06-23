import { useQuery } from "react-query";
import { Container, Row, Col, Image } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";

import "./App.css";

export default function App() {
  const { isLoading, error, data } = useQuery("cats", () =>
    fetch(
      `https://api.thecatapi.com/v1/breeds/search?api_key=${process.env.REACT_APP_CAT_API_KEY}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    //console.log(process.env);
    return (
      <div className="App">
        <PulseLoader size={20} color="teal" />
      </div>
    );
  } else if (error) {
    return "Error!!";
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="App">
            <Image fluid src={data.image} alt="random user" />
            <code>{JSON.stringify(data, null, 2)}</code>
            <h4>cats</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
