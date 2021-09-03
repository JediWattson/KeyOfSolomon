import { Fragment } from "react"
import { usePlanets } from './helpers'

function PlanetCurrent() {    
    let { fetching, day, hour, bestUsedFor, grouping = [] } = usePlanets()    
    if(fetching){
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",                   
            }}>
                <h3>Determining time of sunrise...</h3>
            </div>
        )
    }
    return (
        <>
            <div 
                style={{
                    textAlign: "center",
                    fontFamily: "Arial, Times",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <div>
                    <p>Today's planet:</p>
                    <b>{ day }</b>
                </div>
                <div>
                    <p>The planet this hour:</p>
                    <b>{ hour }</b>
                </div>
            </div>
            <div 
                style={{ 
                    padding: "32px 0",
                    width: "100%", 
                    display: "flex", 
                    justifyContent: "center", 
                }}
            >
                <div style={{ maxWidth: 365 }}>
                    <i>{ bestUsedFor }</i>     
                    <br /><br />                               
                    {grouping.map(text => (
                        <Fragment key={text} >
                            <i>{ text }</i>
                            <br />
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PlanetCurrent