import { readFile } from "@util/readFile";
import { stringToNumber } from "@util/stringToNumber";
import { multiply, run, run2 } from "./";

describe("today", () => {
  let list: string[];
  let testList: string[];
  let testList2: string[];

  beforeEach(async () => {
    list = await readFile(`${__dirname}/input.txt`);
    testList = await readFile(`${__dirname}/test.txt`);
    testList2 = await readFile(`${__dirname}/test2.txt`);
  });

  describe("test", () => {
    describe("multiply", () => {
      it("mul(2,4) = 8", () => {
        const product = multiply("mul(2,4)");
        expect(product).toBe(8);
      });
    });

    it("run small", async () => {
      const result = await run(["mul(2,4)"]);
      expect(result).toEqual(8);
    });
    it("run small2", async () => {
      const result = await run(["mul(22,44)"]);
      expect(result).toEqual(968);
    });

    it("run", async () => {
      const result = await run(testList);
      expect(result).toEqual(161);
    });
  });

  describe("first", () => {
    it("run", async () => {
      const result = await run(list);
      expect(result).toEqual(178794710);
    });
  });

  describe("second", () => {
    it("test", async () => {
      // const result = await run(testList2, true);
      const result = await run(testList2, true);
      expect(result).toEqual(48);
    });
    it("run", async () => {
      // const result = await run(list, true);
      const result = await run2(list);
      expect(result).toEqual(76729637);
    });
    it("run", async () => {
      const result = await run(list, true);
      expect(result).toEqual(76729637);
    });
  });
});
