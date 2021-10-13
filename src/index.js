export default class Age {
  constructor(age) {
    this.age = age;
    this.mercuryAge = 0;
    this.mercuryLifetime = 0;
  }
  
  mercuryTime() {
    const time =  (this.age * 365) / 88;
    return Math.round(time);
  }
  
  venusTime() {
    const time = (this.age * 365) / 255;
    return Math.round(time);
  }
  
  marsTime() {
    const time = (this.age * 365) / 687;
    return Math.round(time);
  }
  
  jupiterTime() {
    const time = (this.age * 365) / 4333;
    return Math.round(time);
  }

  mercuryConverter(age, lifeTime) {
    const time = (mercuryTime(age));
    const life = (mercuryTime(lifeTime));
    if(time > life) {
      return (time - life);
    }
    return (life - time);
  }

  venusConverter(age, lifeTime) {
    const time = (venusTime(age));
    const life = (venusTime(lifeTime));
    if(time > life) {
      return (time - life);
    }
    return (life - time);
  }
  
  marsConverter(age, lifeTime) {
    const time = (marsTime(age));
    const life = (marsTime(lifeTime));
    if(time > life) {
      return (time - life);
    }
    return (life - time);
  }

  jupiterConverter(age, lifeTime) {
    const time = (jupiterTime(age));
    const life = (jupiterTime(lifeTime));
    if(time > life) {
      return (time - life);
    }
    return (life - time);
  }
}






