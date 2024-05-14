'use client'

import { useEffect, useState } from "react";

import {
  weekIndexes,
  grouping,
  groupingType,
  themes,
  planets,
} from "../constants.js";

function formatInfo(sunrise) {
  const date = new Date();
  const currHours = date.getHours();

  const day = weekIndexes[date.getDay()];
  const hour =
    (day + (currHours > sunrise ? currHours - sunrise : currHours)) %
    planets.length;

  if (!planets[day] || !planets[hour] || !themes[day]) {
    throw new Error(`FORMAT ERROR: incorrect day: ${day} or hour: ${hour}`);
  }

  const planetDay = { ...planets[day], subtitle: themes[day] };

  const groupedInfo = grouping.reduce(
    (acc, cur) => {
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

const getSunrise = async (pos, cb) => {
  try {
    const resp = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&date=today&formatted=0`
    );
    const json = await resp.json();

    localStorage.setItem("sunrise", json.results.sunrise);
    const sunrise = new Date(json.results.sunrise);
    cb(sunrise.getHours());
  } catch (error) {
    console.error(error);
  }
};

export function usePlanets() {
  const [info, setInfo] = useState({ fetching: true });
  const [sunrise, setSunrise] = useState();

  useEffect(() => {
    if (sunrise) {
      setInfo(formatInfo(sunrise));
      // TODO: set up inteval to work with the current milliseconds to change on new hour
      const infoInterval = setInterval(
        () => setInfo(formatInfo(sunrise)),
        1000 * 60 * 30
      );
      return () => clearInterval(infoInterval);
    }
    const localSunrise = localStorage.getItem("sunrise");
    if (localSunrise) {
      const formattedSunrise = new Date(localSunrise);
      setSunrise(formattedSunrise.getHours());
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => getSunrise(pos, setSunrise),
        console.error
      );
    }
  }, [sunrise]);

  return info;
}

export const makeAlt = (text) => text && `Planet ${text.split(",")[2].trim()}`;
