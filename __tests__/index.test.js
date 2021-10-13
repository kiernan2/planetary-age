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

  test('Check Mercury time', () => {
    let testAge = new Age(15);
    expect(testAge.mercuryTime()).toEqual(62);
  });

  // test('Check Venus time', () => {
  //   let testAge = new Age(15);
  //   expect(testAge.venusTime()).toEqual(21);
  // });

  // test('Check Mars time', () => {
  //   expect(marsTime(15)).toEqual(8);
  // });

  // test('Check Jupiter time', () => {
  //   expect(jupiterTime(15)).toEqual(1);
  // });

  // test('Check Mercury Converter', () => {
  //   expect(mercuryConverter(20,80)).toEqual(249);
  // });

  // test('Check Venus Converter', () => {
  //   expect(venusConverter(20,80)).toEqual(86);
  // });

  // test('Check Mars Converter', () => {
  //   expect(marsConverter(20,80)).toEqual(32);
  // });

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