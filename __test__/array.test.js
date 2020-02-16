const map = require("../array/map");

describe("array", () => {
  describe("map", () => {
    it("maps a simple array", () => {
      const arr = [1, 2, 3];
      const fn = el => el * 10;
      const answer = arr.map(fn);
      expect(map(arr, fn)).toEqual(answer);
    });
    it("maps an empty array", () => {
      const arr = [];
      const fn = el => el * 10;
      const answer = arr.map(fn);
      expect(map(arr, fn)).toEqual(answer);
    });
    it("maps an array with holes", () => {
      const arr = [1, 2, , , 3];
      const fn = el => el * 10;
      const answer = arr.map(fn);
      expect(map(arr, fn)).toEqual(answer);
    });
    it("uses thisArg", () => {
      const obj = {
        0: "foo",
        1: "bar",
        2: "baz"
      };
      const arr = [1, 2, 3];
      const fn = function(el, i) {
        return this[i] + el;
      };
      const answer = arr.map(fn, obj);
      expect(map(arr, fn, obj)).toEqual(answer);
    });
    it("uses the idx and arr parameters", () => {
      const arr = [1, 2, 3];
      const fn = (el, idx, arr) => JSON.stringify([el, idx, arr]);
      const answer = arr.map(fn);
      expect(map(arr, fn)).toEqual(answer);
    });
  });
});
