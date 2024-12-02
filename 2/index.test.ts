import { readFile } from "@util/readFile";
import { run, run2 } from "./";

describe("1", () => {
  let list: string[];
  let testList: string[];

  beforeEach(async () => {
    list = await readFile(`${__dirname}/input.txt`);
    testList = await readFile(`${__dirname}/test.txt`);
  });

  describe("test", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run(testList);
      expect(result).toEqual(2);
    });
  });

  describe("first", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run(list);
      expect(result).toEqual(686);
    });
  });

  describe("second", () => {
    it("test", async () => {
      expect.assertions(1);
      const result = await run2(testList);
      expect(result).toEqual(4);
    });

    it("run", async () => {
      const result = await run2(list);
      expect(result).toBeGreaterThan(708);
      expect(result).toEqual(717);
    });
  });
});
