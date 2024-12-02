import { sum } from "@util/sum";

function isSafe(reports: number[]) {
  const differences: number[] = [];

  for (let i = 1; i < reports.length; i++) {
    differences.push(reports[i] - reports[i - 1]);
  }

  const increasing = differences.every((d) => d >= 1 && d <= 3);
  const decreasing = differences.every((d) => d <= -1 && d >= -3);

  return increasing || decreasing;
}
export const run = async (list: string[]) => {
  const reports = list.map((row) => row.split(/\s+/).map(Number));

  const results = reports.map((report) => {
    const isPositive = report[1] - report[0] > 0;
    return report.every((currentLevel, i) => {
      if (i === 0) {
        return true;
      }
      const prevLevel = report[i - 1];
      const localIsPositive = currentLevel - prevLevel > 0;
      if (isPositive !== localIsPositive) {
        return false;
      }
      const diff = Math.abs(currentLevel - prevLevel);
      if (diff >= 1 && diff <= 3) {
        return true;
      }
      return false;
    });
  });

  return results.filter(Boolean).length;
};

export const run2 = async (list: string[]) => {
  const reports = list.map((row) => row.split(/\s+/).map(Number));

  return reports
    .map((report) => {
      let tolerable = false;

      for (let i = 0; i < report.length; i++) {
        const removed = [...report.slice(0, i), ...report.slice(i + 1)];

        if (isSafe(removed)) {
          tolerable = true;
          break;
        }
      }

      return tolerable || isSafe(report);
    })
    .filter(Boolean).length;
};
