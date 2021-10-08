import $ from 'jquery';

export function mercuryTime(age) {
  const time =  (age * 365) / 88;
  return Math.round(time);
}

export function venusTime(age) {
  const time = (age * 365) / 255;
  return Math.round(time);
}

export function marsTime(age) {
  const time = (age * 365) / 687;
  return Math.round(time);
}