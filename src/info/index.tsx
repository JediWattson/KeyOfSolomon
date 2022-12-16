import { Fragment } from "react";
import { Card, Row, Stack } from "react-bootstrap";
import { usePlanets } from "./helpers";
import Loading from "./loading";

import styles from "./styles.module.css";

function PlanetCurrent() {
  const { fetching, day, hour, bestUsedFor, grouping = [] } = usePlanets();

  if (fetching) return <Loading />;

  return (
    <Stack gap={3}>
      <Row>
        <Card text="light" bg="secondary">
          <Card.Img
            className={styles["card-image"]}
            variant="top"
            src={day?.image}
          />
          <Card.Header>{`Today's planet`}</Card.Header>
          <Card.Body>
            <Card.Title>{day?.text}</Card.Title>
            <Card.Text>{bestUsedFor}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card text="light" bg="secondary">
          <Card.Img
            className={styles["card-image"]}
            variant="top"
            src={hour?.image}
          />
          <Card.Header>{`This Hour's Planet`}</Card.Header>
          <Card.Body>
            <Card.Title>{hour?.text}</Card.Title>
            <Card.Text>
              {grouping?.map((text) => (
                <Fragment key={text}>
                  {text}
                  <br />
                </Fragment>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Stack>
  );
}

export default PlanetCurrent;
