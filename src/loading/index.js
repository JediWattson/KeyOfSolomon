import { Container, Row, Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Container style={{ marginTop: 80 }}>
      <Row className="justify-content-center" style={{ marginBottom: 8 }}>
        <Spinner animation="grow" variant="warning" />
        <Spinner
          style={{ margin: "0 8px" }}
          animation="grow"
          variant="warning"
        />
        <Spinner animation="grow" variant="warning" />
      </Row>
      <Row className="justify-content-center">
        <p style={{ textAlign: "center" }}>Determining time of sunrise...</p>
      </Row>
    </Container>
  );
}

export default Loading;
