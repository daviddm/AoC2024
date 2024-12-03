import { sum } from "@util/sum";

const regexp1 = new RegExp(/mul\([\d]{1,3},[\d]{1,3}\)/, "g");
const regexp2 = new RegExp(/mul\([\d]{1,3},[\d]{1,3}\)|do\(\)|don\'t\(\)/, "g");

export const run = async (list: string[], check = false) => {
  const regexp = check ? regexp2 : regexp1;
  const result = list
    .map((row) => {
      let enabled = true;
      const muls = [];
      while (true) {
        const statement = regexp.exec(row);
        if (statement === null) {
          break;
        }

        if (statement[0] === "don't()") {
          enabled = false;
          continue;
        }
        if (statement[0] === "do()") {
          enabled = true;
          continue;
        }
        if (!enabled) {
          continue;
        }
        // console.log(statement);
        muls.push(statement[0]);
      }
      return muls.map(multiply).reduce(sum);
    })
    .reduce(sum as any);
  return result;
};

export function multiply(input: string): number {
  try {
    const full = input.match(/\(([\d]+),([\d]+)\)/) as any;
    return full[1] * full[2];
  } catch (error) {
    console.error(input);
  }
  return 0;
}

export function run2(list: string[]) {
  const lines = list.join("");
  let score = 0;
  const mulInstructions = lines.matchAll(
    /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g
  );
  let enable = true;
  for (const match of mulInstructions) {
    if (match[0] === "do()") enable = true;
    else if (match[0] === "don't()") enable = false;
    else if (enable) score += parseInt(match[1]) * parseInt(match[2]);
  }
  return score;
}
