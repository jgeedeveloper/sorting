describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an unsorted array', function() {
    expect(bubbleSort([5, 2, 1, 4, 3])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('Swap', function() {
  it('handles order of two numbers', function() {
    expect(swap([5, 4])).toEqual([4, 5]);
  });
});
