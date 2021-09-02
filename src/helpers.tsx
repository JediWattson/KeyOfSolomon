import { themes, planets } from './constants'

interface Info {
    day: string
    hour: string
    alignedHours: string
    bestUsedFor: string
}

export function formatInfo(): Info {    
    let date: Date = new Date()
    let day: number = date.getDay()
    let hour: number = date.getHours()
    let alignedHours: string = [0,0,0].map((_, i: number) => {
        let hour: number = (planets.length*i + day)%24
        let isPastNoon: boolean = hour >= 12
        return `${ isPastNoon? hour%12 : hour }:00 ${ isPastNoon? "pm" : "am" }`
    }).join(", ")

    return { 
        day: planets[day],
        hour: planets[hour%planets.length], 
        bestUsedFor: themes[day],
        alignedHours
    }
}