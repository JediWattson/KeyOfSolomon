import { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { usePlanets } from './helpers'
import Loading from './loading'


function PlanetCurrent() {    
    let { fetching, day, hour, bestUsedFor, grouping = [] } = usePlanets()    
    
    if(fetching)
        return <Loading />
    
    return (        
        <>
            <Card text="light" bg="secondary" style={{ margin: "16px 0" }}>
                <Card.Img variant="top" src={day?.image} style={{ height: 200, objectFit: "cover" }} />
                <Card.Header>
                    {`Today's planet`}
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        { day?.text }
                    </Card.Title>
                    <Card.Text>
                        { bestUsedFor }
                    </Card.Text>
                </Card.Body>                    
            </Card>
            <Card text="light" bg="secondary" >
                <Card.Img variant="top" src={hour?.image} style={{ height: 200, objectFit: "cover" }} />
                <Card.Header>
                    {`This Hour's Planet`}
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        { hour?.text }
                    </Card.Title>
                    <Card.Text>
                        {grouping?.map(text => (
                            <Fragment key={text} >
                                { text }
                                <br /> 
                            </Fragment>
                        ))}
                    </Card.Text>
                </Card.Body>                    
            </Card>
        </>
    )
}

export default PlanetCurrent