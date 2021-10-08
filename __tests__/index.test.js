import {mercuryTime} from "../src/index.js";
import {venusTime} from "../src/index.js";

describe('dex', () => {

  test('Check Mercury time', () => {
    expect(mercuryTime(15)).toEqual(62);
  })

  test('Check Venus time', () => {
    expect(venusTime(15)).toEqual(21);
  })

  test('Check Mars time', () => {
    expect(marsTime(15)).toEqual(8);
  })

})