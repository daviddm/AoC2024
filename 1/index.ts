import { sum } from "@util/sum";

export const run = async (list: string[]) => {
  const parsedList = list.map((row) => row.split(/\s+/).map(Number));
  const listASorted = parsedList.map((row) => row[0]).sort();
  const listBSorted = parsedList.map((row) => row[1]).sort();

  return listASorted
    .map((a, i) => {
      return Math.abs(listBSorted[i] - listASorted[i]);
    })
    .reduce(sum);
};

export const run2 = async (list: string[]) => {
  const parsedList = list.map((row) => row.split(/\s+/).map(Number));
  const listA = parsedList.map((row) => row[0]);
  const listB = parsedList.map((row) => row[1]);

  const mapB = new Map<number, number>();
  listB.forEach((b) => {
    mapB.set(b, 1 + (mapB.get(b) ?? 0));
  });

  return listA.map((a) => a * (mapB.get(a) ?? 0)).reduce(sum);
};
