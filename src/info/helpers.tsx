import { useEffect, useState } from "react";

import {
  weekIndexes,
  grouping,
  groupingType,
  themes,
  planets,
} from "./constants";

export const makeAlt = (text) => text && `Planet ${text.split(",")[2].trim()}`;

interface planet {
  subtitle: string | string[];
  nasaId: string;
  text: string;
  height: number;
  width: number;
}

export interface Info {
  day?: planet;
  hour?: planet;
  fetching: boolean;
}

export function formatInfo(sunrise: number): Info {
  const date: Date = new Date();
  const currHours: number = date.getHours();

  const day: number = weekIndexes[date.getDay()];
  const hour: number =
    (day + (currHours > sunrise ? currHours - sunrise : currHours)) %
    planets.length;

  if (!planets[day] || !planets[hour] || !themes[day]) {
    throw new Error(`FORMAT ERROR: incorrect day: ${day} or hour: ${hour}`);
  }

  const planetDay = { ...planets[day], subtitle: themes[day] };

  const groupedInfo = grouping.reduce(
    (acc: Array<string>, cur: groupingType) => {
      if (cur.planets.includes(hour)) acc.push(cur.text);
      return acc;
    },
    []
  );
  const planetHour = { ...planets[hour], subtitle: groupedInfo };

  return {
    day: planetDay,
    hour: planetHour,
    fetching: false,
  };
}

export function usePlanets(): Info {
  const [info, setInfo] = useState<Info>({ fetching: true });
  const [sunrise, setSunrise] = useState<number>();

  const getSunrise = async (pos: GeolocationPosition) => {
    try {
      const resp = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&date=today&formatted=0`
      );
      const json = await resp.json();

      localStorage.setItem("sunrise", json.results.sunrise);
      const sunrise = new Date(json.results.sunrise);
      setSunrise(sunrise.getHours());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (sunrise) {
      setInfo(formatInfo(sunrise));
      // TODO: set up inteval to work with the current milliseconds to change on new hour
      const infoInterval = setInterval(
        () => setInfo(formatInfo(sunrise)),
        1000 * 60 * 30
      );
      return () => clearInterval(infoInterval);
    } else {
      const localSunrise = localStorage.getItem("sunrise");
      if (localSunrise) {
        const formattedSunrise = new Date(localSunrise);
        setSunrise(formattedSunrise.getHours());
      } else {
        navigator.geolocation.getCurrentPosition(getSunrise, console.error);
      }
    }
  }, [sunrise]);

  return info;
}
