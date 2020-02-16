const map = require("../array/map");
const filter = require("../array/filter");
const reduce = require("../array/reduce");
const concat = require("../array/concat");

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

  describe("filter", () => {
    it("filters a simple array", () => {
      const arr = [1, 2, 3];
      const fn = el => el === 2;
      const answer = arr.filter(fn);
      expect(filter(arr, fn)).toEqual(answer);
    });
    it("filters an empty array", () => {
      const arr = [];
      const fn = el => el > 10;
      const answer = arr.filter(fn);
      expect(filter(arr, fn)).toEqual(answer);
    });
    it("filters an array with holes", () => {
      const arr = [1, 2, , , 3];
      const fn = el => el > 1;
      const answer = arr.filter(fn);
      expect(filter(arr, fn)).toEqual(answer);
    });
    it("filters an array with holes using falsey value", () => {
      const arr = [1, 2, , , 3];
      const fn = el => el == undefined;
      const answer = arr.filter(fn);
      expect(filter(arr, fn)).toEqual(answer);
    });
    it("filters using idx and arr", () => {
      const arr = [1, 2, 3, 4];
      const fn = (el, idx, arr) => {
        if (el === 1 || idx === 3 || el === arr[2]) {
          return true;
        }
        return false;
      };
      const answer = arr.filter(fn);
      expect(filter(arr, fn)).toEqual(answer);
    });
    it("uses thisArg", () => {
      const obj = {
        0: "foo",
        1: "bar",
        2: "baz"
      };
      const arr = [1, 2, 3];
      const fn = function(el) {
        return !!this[el];
      };
      const result = arr.filter(fn, obj);
      expect(filter(arr, fn, obj)).toEqual(result);
    });
  });

  describe("reduce", () => {
    it("adds numbers", () => {
      const arr = [1, 2, 3, 4];
      const fn = (acc, el) => acc + el;
      const initialValue = 0;
      const answer = arr.reduce(fn, initialValue);
      expect(reduce(arr, fn, initialValue)).toEqual(answer);
    });
    it("adds numbers with no initial value", () => {
      const arr = [1, 2, 3, 4];
      const fn = (acc, el) => acc + el;
      const answer = arr.reduce(fn);
      expect(reduce(arr, fn)).toEqual(answer);
    });
    it("uses idx and arr", () => {
      const arr = [1, 2, 3, 4];
      const fn = (acc, el, idx, arr) => acc + JSON.stringify([el, idx, arr]);
      const initialValue = "foobar";
      const answer = arr.reduce(fn, initialValue);
      expect(reduce(arr, fn, initialValue)).toEqual(answer);
    });
    it("uses idx and arr, no initial value", () => {
      const arr = [1, 2, 3, 4];
      const fn = (acc, el, idx, arr) => acc + JSON.stringify([el, idx, arr]);
      const answer = arr.reduce(fn);
      expect(reduce(arr, fn)).toEqual(answer);
    });
  });

  describe("concat", () => {
    it("concatenates two arrays", () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      const result = arr1.concat(arr2);
      expect(concat(arr1, arr2)).toEqual(result);
    });
    it("concatenates many arrays", () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      const arr3 = [7, 8, 9];
      const arr4 = [10, 11, 12];
      const result = arr1.concat(arr2, arr3, arr4);
      expect(concat(arr1, arr2, arr3, arr4)).toEqual(result);
    });
  });
});
