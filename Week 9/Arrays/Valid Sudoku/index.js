function isValidSudoku(board) {
  const rows = {};
  const cols = {};
  const squares = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];

      if (val === ".") continue;

      const sKey = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      if (!rows[r]) rows[r] = {};
      if (!cols[c]) cols[c] = {};
      if (!squares[sKey]) squares[sKey] = {};

      if (rows[r][val] || cols[c][val] || squares[sKey][val]) {
        return false;
      }

      rows[r][val] = true;
      cols[c][val] = true;
      squares[sKey][val] = true;
    }
  }

  return true;
}
