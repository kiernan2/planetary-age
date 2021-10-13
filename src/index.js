export default class Age {
  constructor(age) {
    this.age = age;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.lifeTime = 80;
  }
  
  mercuryTime(age) {
    const time =  (age * 365) / 88;
    return Math.round(time);
  }
  
  venusTime(age) {
    const time = (age * 365) / 255;
    return Math.round(time);
  }
  
  marsTime(age) {
    const time = (age * 365) / 687;
    return Math.round(time);
  }
  
  jupiterTime(age) {
    const time = (age * 365) / 4333;
    return Math.round(time);
  }

  mercuryConverter() {
    const time = this.mercuryTime(this.age);
    const life = this.mercuryTime(this.lifeTime);
    if(time > life) {
      this.mercuryAge = (time - life);
    } else {
      this.mercuryAge = (life - time);
    }
  }

  venusConverter() {
    const time = this.venusTime(this.age);
    const life = this.venusTime(this.lifeTime);
    if(time > life) {
      this.venusAge = (time - life);
    } else {
      this.venusAge = (life - time);
    }
  }
  
  marsConverter() {
    const time = (this.marsTime(this.age));
    const life = (this.marsTime(this.lifeTime));
    if(time > life) {
      this.marsAge = (time - life);
    } else {
      this.marsAge = (life - time);
    }
  }

  jupiterConverter() {
    const time = (this.jupiterTime(this.age));
    const life = (this.jupiterTime(this.lifeTime));
    if(time > life) {
      this.jupiterAge = (time - life);
    } else {
      this.jupiterAge = (life - time);
    }
  }
}






