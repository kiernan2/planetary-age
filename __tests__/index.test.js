// import {mercuryTime} from "../src/index.js";
// import {venusTime} from "../src/index.js";
// import {marsTime} from "../src/index.js";
// import {jupiterTime} from "../src/index.js";
// import {mercuryConverter} from "../src/index.js";
// import {venusConverter} from "../src/index.js";
// import {marsConverter} from "../src/index.js";
// import {jupiterConverter} from "../src/index.js";
import Age from "../src/index.js";

describe('index', () => {

  let testAge;

  beforeEach(() => {
    testAge = new Age(15);
  });

  test('Check Mercury time', () => {
    expect(testAge.mercuryTime(testAge.age)).toEqual(62);
  });

  test('Check Venus time', () => {
    expect(testAge.venusTime(testAge.age)).toEqual(21);
  });

  test('Check Mars time', () => {
    expect(testAge.marsTime(testAge.age)).toEqual(8);
  });

  // test('Check Jupiter time', () => {
  //   expect(jupiterTime(15)).toEqual(1);
  // });

  test('Check Mercury Converter', () => {
    testAge = new Age(20);
    testAge.mercuryConverter();
    expect(testAge.mercuryAge).toEqual(249);
  });

  test('Check Venus Converter', () => {
    testAge = new Age(20);
    testAge.venusConverter();
    expect(testAge.venusAge).toEqual(86);
  });

  test('Check Mars Converter', () => {
    testAge = new Age(20);
    testAge.marsConverter();
    expect(testAge.marsAge).toEqual(32);
  });

  // test('Check Jupiter Converter', () => {
  //   expect(jupiterConverter(20,80)).toEqual(5);
  // });

  // test('Check Time over lifetime', () => {
  //   expect(mercuryConverter(100,80)).toEqual(83);
  //   expect(venusConverter(100,80)).toEqual(28);
  //   expect(marsConverter(100,80)).toEqual(10);
  //   expect(jupiterConverter(100,80)).toEqual(1);
  // });

})