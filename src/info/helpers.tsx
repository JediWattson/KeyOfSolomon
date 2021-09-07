import { useEffect, useState } from "react"

import { weekIndexes, grouping, groupingType, themes, planets } from './constants'


export interface Info {
    day?: { 
        text: string 
        image: string 
    }
    hour?: { 
        text: string 
        image: string 
    }
    grouping?: string[]
    bestUsedFor?: string
    fetching: boolean
}

export function formatInfo(sunrise: number): Info {
    let date: Date = new Date()
    let day: number = weekIndexes[date.getDay()]
    let hour: number = (day + (date.getHours() - sunrise))%planets.length

    let group = grouping.reduce((acc: Array<string>, cur: groupingType) => {
        if(cur.planets.includes(hour%planets.length))
            acc.push(cur.text)
        return acc
    }, [])

    return {
        day: planets[day],
        hour: planets[hour%planets.length], 
        bestUsedFor: themes[day],
        grouping: group,
        fetching: false
    }
}

export function usePlanets(): Info {
    let [info, setInfo]  = useState<Info>({ fetching: true })
    let [sunrise, setSunrise] = useState<number>()

    let getSunrise = async (pos: GeolocationPosition) => {

        try {            
            let resp = await fetch(`https://api.sunrise-sunset.org/json?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&date=today&formatted=0`)
            let json = await resp.json()

            localStorage.setItem('sunrise', json.results.sunrise)
            let sunrise = new Date(json.results.sunrise)         
            setSunrise(sunrise.getHours())                               
        } catch (error) {
            console.error(error)
        }
    }
 
    useEffect(()=>{
        if(sunrise){
            setInfo(formatInfo(sunrise))
            // TODO: set up inteval to work with the current milliseconds to change on new hour
            let infoInterval = setInterval(()=> setInfo(formatInfo(sunrise)), 1000*60*30)        
            return () => clearInterval(infoInterval)    
        } else {
            let localSunrise = localStorage.getItem('sunrise')
            if(localSunrise){
                let formattedSunrise = new Date(localSunrise)
                setSunrise(formattedSunrise.getHours())
            } else {
                navigator.geolocation.getCurrentPosition(getSunrise, console.error)
            }
        }
    }, [sunrise])

    return info
}
