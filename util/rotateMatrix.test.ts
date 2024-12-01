import { rotateMatrix } from "./rotateMatrix";

describe("rotateMatrix", () => {
  let matrix: number[][];

  beforeEach(() => {
    matrix = [
      [1, 2],
      [3, 4],
    ];
  });
  it("should return rotate matrix", () => {
    const rotated = rotateMatrix(matrix);
    expect(rotated).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });
});
