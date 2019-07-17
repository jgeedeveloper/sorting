//
const swap = (array, a, b) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
};

const bubbleSort = array => {
  let sorted = false;
  while (sorted === false) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, array[i], array[i + 1]);
      } else if (array[0] < array[1]) {
        sorted = true;
      }
    }
  }
  return array;
};
