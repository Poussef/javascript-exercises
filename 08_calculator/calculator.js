const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }else if (nums.length === 0) {
    return 0;
  };
  let summed = nums[0];
  for (let i = 1; i < nums.length; i++){
      summed += nums[i];
    };
  return summed;
  };

const multiply = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }else if (nums.length === 0) {
    return 0;
  };
  let multiplied = nums[0];
  for (let i = 1; i < nums.length; i++){
      multiplied *= nums[i];
    };
  return multiplied;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  };
  let i = 1;
  let factorized = 1;
  while (i <= num) {
    factorized *= i; 
    i++;
  };
  return factorized;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
