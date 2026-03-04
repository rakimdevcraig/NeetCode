function searchMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let top = 0;
  let bot = rows - 1;

  while (top <= bot) {
    let middleRow = Math.floor((top + bot) / 2);
    if (target < matrix[middleRow][0]) {
      bot = middleRow - 1;
    } else if (target > matrix[middleRow][cols - 1]) {
      top = middleRow + 1;
    } else {
      break;
    }
  }
  if (!(top <= bot)) return false;

  let left = 0;
  let right = cols - 1;
  let targetRow = Math.floor((top + bot) / 2);
  while (left <= right) {
    let midPoint = Math.floor((left + right) / 2);
    if (target > matrix[targetRow][midPoint]) {
      left = midPoint + 1;
    } else if (target < matrix[targetRow][midPoint]) {
      right = midPoint - 1;
    } else {
      return true;
    }
  }
  return false;
}

module.exports = searchMatrix;
