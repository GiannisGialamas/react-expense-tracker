export const getIncome = (amounts: number[]) => {
  return amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
};

export const getExpense = (amounts: number[]) => {
  return (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
};
