import React from "react"
import { formatInfo } from './helpers'

function PlanetCurrent() {
    let { day, hour, alignedHours, bestUsedFor } = formatInfo()
    return (
        <div 
            style={{
                textAlign: "center",
                fontFamily: "Arial, Times",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "80vh",            
                maxHeight: 400
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
            <div style={{ maxWidth: 365 }}>
                <p>A word of advice today:</p>
                <b>{ bestUsedFor }</b>
            </div>
        </div>
    )
}

export default PlanetCurrent