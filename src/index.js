import $ from 'jquery';

export function mercuryTime(age) {
  const time =  (age * 365) / 88;
  return Math.round(time);
}

export function venusTime(age) {
  const time = (age * 365) / 255;
  return Math.round(time);
}

