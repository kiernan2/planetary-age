
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

export function jupiterTime(age) {
  const time = (age * 365) / 4333;
  return Math.round(time);
}

export function mercuryConverter(age, lifeTime) {
  const time = (mercuryTime(age));
  const life = (mercuryTime(lifeTime));
  return (life - time);
}

export function venusConverter(age, lifeTime) {
  const time = (venusTime(age));
  const life = (venusTime(lifeTime));
  return (life - time);
}

export function marsConverter(age, lifeTime) {
  const time = (marsTime(age));
  const life = (marsTime(lifeTime));
  return (life - time);
}

export function jupiterConverter(age, lifeTime) {
  const time = (jupiterTime(age));
  const life = (jupiterTime(lifeTime));
  return (life - time);
}