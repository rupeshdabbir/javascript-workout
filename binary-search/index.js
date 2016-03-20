export default function BinarySearch(arr, val) {
  if (arr.length === 0) {
    return -1;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let idx = Math.floor((left + right) / 2);
    if (arr[idx] === val) {
      return idx;
    }
    if (arr[idx] > val) {
      right = idx - 1;
    } else {
      left = idx + 1;
    }
  }

  return -1;
};
