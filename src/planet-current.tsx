import { Fragment, useEffect, useState } from "react"
import { formatInfo, Info } from './helpers'

function PlanetCurrent() {
    let [info, setInfo]  = useState<Info>(formatInfo())
    let { day, hour, alignedHours, bestUsedFor, grouping } = info
    
    useEffect(()=>{
        let infoInterval = setInterval(()=> setInfo(formatInfo()), 1000*60*30)        
        return () => clearInterval(infoInterval)
    }, [])
    return (
        <>
            <div 
                style={{
                    textAlign: "center",
                    fontFamily: "Arial, Times",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 240
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
                <div>
                    <p>The times will be aligned at:</p>
                    <b>{ alignedHours }</b>
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