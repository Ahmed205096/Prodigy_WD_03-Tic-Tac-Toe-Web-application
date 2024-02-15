import { checkWinner } from "./CheckWinner";

export const play = (
  row,
  col,
  board,
  winner,
  oddEvenListt,
  setOddEvenList,
  setBoard,
  setWinner
) => {
  if (winner === "") {
    if (board[row][col] === null) {
      const list = [...oddEvenListt];
      list.push(1);
      setOddEvenList(list);

      if (oddEvenListt.length % 2 === 0) {
        const newBoard = [...board];
        newBoard[row][col] = "x";
        setBoard(newBoard);
      } else {
        const newBoard = [...board];
        newBoard[row][col] = "o";
        setBoard(newBoard);
      }
    }
    if (checkWinner(board))
      setWinner(`${checkWinner(board).toUpperCase()} Is The Winner`);
  }
};

export const play2 = async (row, col, board, winner, setBoard, setWinner) => {
  if (winner === "") {
    if (board[row][col] === null) {
      const newBoard = [...board];
      newBoard[row][col] = "x";
      setBoard(newBoard);
      await new Promise(resolve => setTimeout(resolve, 500));
      aiPlayer(board, winner, setBoard, setWinner);
    }
    if (checkWinner(board))
      setWinner(`${checkWinner(board).toUpperCase()} Is The Winner`);
  }
};

function findSpace(list) {
  const space = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] === null) {
        space.push([i, j]);
      }
    }
  }
  if (space.length !== 0) {
    const randomSpace = Math.floor(Math.random() * space.length) + 0;
    return space[randomSpace];
  }
  return null;
}

export const aiPlayer = (board, winner, setBoard, setWinner) => {
  if (findSpace(board) !== null) {
    const [row, col] = findSpace(board);
    if (winner === "") {
      if (board[row][col] === null) {
        const newBoard = [...board];
        newBoard[row][col] = "o";
        setBoard(newBoard);
      }
      const winnerResult = checkWinner(board);
      if (winnerResult) {
        setWinner(`${winnerResult.toUpperCase()} Is The Winner`);
      }
    }
  }
};

