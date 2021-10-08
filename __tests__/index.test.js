import {mercuryTime} from "../src/index.js";

describe('dex', () => {

  test('Check Mercury time', () => {
    expect(mercuryTime(15)).toEqual(62);
  })

  test('Check Venus time', () => {
    expect(VenusTime(15)).toEqual(24);
  })


})