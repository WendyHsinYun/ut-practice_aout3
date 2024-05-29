// sum.js
function sum(numbers) {
  return numbers.split(',').reduce((acc, number) => acc + parseInt(number, 10), 0);
}

module.exports = sum;
