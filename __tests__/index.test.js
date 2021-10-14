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

  test('Check Jupiter time', () => {
    expect(testAge.jupiterTime(testAge.age)).toEqual(1);
  });

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

  test('Check Jupiter Converter', () => {
    testAge = new Age(20);
    testAge.jupiterConverter();
    expect(testAge.jupiterAge).toEqual(5);
  });

  test('Check Time over lifetime', () => {
    testAge = new Age(100)
    testAge.mercuryConverter();
    expect(testAge.mercuryAge).toEqual(83);
    testAge.venusConverter();
    expect(testAge.venusAge).toEqual(28);
    testAge.marsConverter();
    expect(testAge.marsAge).toEqual(10);
    testAge.jupiterConverter();
    expect(testAge.jupiterAge).toEqual(1);
  });

})