//We define  to be a sequence of distinct sequential integers from 1 to n; in other words,S={1,2,3,...,n}. We want to know the maximum bitwise AND value of any two integers, a and b (where a<b), in sequence S that is also less than a given integer, k.

// Complete the function in the editor so that given n and k, it returns the maximum a & b < k.

const getMaxLessThanK = (n, k) => {
  let max_value = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      if (Number(i & j) < k) {
        if (Number(i & j) > max_value) {
          max_value = i & j;
        }
      }
    }
  }
  return max_value;
};
