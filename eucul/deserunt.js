let v1 = {
  value: [1, 2, 3]
};

let v2 = {
  value: [4, 5, 6]
};

let combined = {
  value: [...v1.value, ...v2.value]
};

console.log(combined.value); // Output: [1, 2, 3, 4, 5, 6]
