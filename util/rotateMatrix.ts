export const rotateMatrix = <T>(matrix: T[][]) => {
  return matrix[0].map((val, index) =>
    matrix.map((row) => row[index]).reverse()
  );
};
