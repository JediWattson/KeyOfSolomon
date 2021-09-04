import { Spinner, Card, Col, Container, Row } from 'react-bootstrap'
import { usePlanets } from './helpers'

function PlanetCurrent() {    
    let { fetching, day, hour, bestUsedFor, grouping = [] } = usePlanets()    
    if(fetching){
        return (
            <Container style={{ marginTop: 80 }}>
                <Row className="justify-content-center" style={{ marginBottom: 8 }}>
                    <Spinner animation="grow" variant="warning" />                                                
                    <Spinner style={{ margin: "0 8px" }} animation="grow" variant="warning" />                                                
                    <Spinner animation="grow" variant="warning" />                                                
                </Row>
                <Row className="justify-content-center">
                    <p style={{ textAlign: "center" }}>Determining time of sunrise...</p>
                </Row>
            </Container>
        )
    }
    return (        
        <Container>
            <Row style={{ margin: "16px 0" }}>
                <Col>
                    <Row className="justify-content-center">
                        <Card text="light" bg="primary" style={{ padding: 0, marginBottom: 16 }}>
                            <Card.Header>
                                Today's planet
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    { day }
                                </Card.Title>
                            </Card.Body>                    
                        </Card>
                    </Row>
                    <Row className="justify-content-center">
                        <Card text="light" bg="primary" style={{ padding: 0 }}>
                            <Card.Header>
                                This Hour's Planet
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    { hour }
                                </Card.Title>
                            </Card.Body>                    
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <p><em>{ bestUsedFor }</em></p>
                    </Row>
                    {grouping.map(text => (
                        <Row key={text}>
                            <p><em>{ text }</em></p>    
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default PlanetCurrent