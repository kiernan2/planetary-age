import {mercuryTime} from "../src/index.js";
import {venusTime} from "../src/index.js";
import {marsTime} from "../src/index.js";
import {jupiterTime} from "../src/index.js";
import {mercuryConverter} from "../src/index.js";
import {venusConverter} from "../src/index.js";

describe('index', () => {

  test('Check Mercury time', () => {
    expect(mercuryTime(15)).toEqual(62);
  });

  test('Check Venus time', () => {
    expect(venusTime(15)).toEqual(21);
  });

  test('Check Mars time', () => {
    expect(marsTime(15)).toEqual(8);
  });

  test('Check Jupiter time', () => {
    expect(jupiterTime(15)).toEqual(1);
  });

  test('Check Mercury Converter', () => {
    expect(mercuryConverter(20,80)).toEqual(249);
  });

  test('Check Venus Converter', () => {
    expect(venusConverter(20,80)).toEqual(86);
  });

  test('Check Mars Converter', () => {
    expect(marsConverter(20,80)).toEqual(32);
  })
})