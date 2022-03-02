export function getPercentageOfNumbers(
  numberFirst: number,
  numberSecond: number,
) {
  let percent: number = numberFirst / numberSecond;
  return percent.toFixed(2);
}
