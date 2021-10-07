import index from "../src/game";

describe('index', () => {

  test('Check Mercury time',() => {
    expect(mercuryTime(15).toEqual(62.2));
  })
})