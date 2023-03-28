import {Roller} from './Roller';


test("If the die defaults to 6 if the value entered is invalid", () => {
  let entry: Roller = new Roller(1);
  let size: number = entry.distribution().size;
  expect(size).toBe(6);


});

test("Die should be to the value entered if valid", () => {
  let entry: Roller = new Roller(5);
  let size: number = entry.distribution().size;
  expect(size).toBe(5);


});


test("If the Roll is between 1-entered value, should return value", () => {
  let entry: Roller = new Roller(3);
  let roll: number = entry.roll(3);
  expect(roll).toBe(3);

});

test("If the Roll is between 1-entered value, should increment map value", () => {
  let entry: Roller = new Roller(3);
  let roll: number = entry.roll(3);
  let incre: Map<number, number> = entry.distribution();
  let check: number = incre.get(3)
  expect(check).toBe(2);

});

test("If the Roll is not valid between 1-entered value, should return 0", () => {
  let entry: Roller = new Roller(3);
  let roll: number = entry.roll(0);
  expect(roll).toBe(0);

});

test("If the Roll is not valid between 1-entered value, should store in last", () => {
  let entry: Roller = new Roller(3);
  let roll: number = entry.roll(-1);
  let lastroll: number = entry.last()
  expect(lastroll).toBe(0);

});

test("If the Roll is not valid between 1-entered value, should not increment in map", () => {
  let entry: Roller = new Roller(3);
  let roll: number = entry.roll(-1);
  let incre: Map<number, number> = entry.distribution();
  expect(incre).toBe(incre);

});

