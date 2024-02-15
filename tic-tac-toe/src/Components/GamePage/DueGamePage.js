import { useState } from "react";
import "./DueGamePage.css";
import { winnerMessgae } from "../GameFunctions/WinnerMessgae";
import { play, play2 } from "../GameFunctions/DuePlay";
import { PlayerState } from "../WelcomePage/WelcomePage";

export default function SoloGamePage() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);


  const hasNull = (list)=>{
   return list.some(row => {
      return row.some(element => element === null);
    });
  }

  const StopGame = hasNull(board);


  const [winner, setWinner] = useState("");

  const [oddEvenListt, setOddEvenList] = useState([]);

  const DuePlayers = () => {
    return (
      <div className="play-container">
        <h1 className="title">TIC TAC TOE</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  onClick={() => {
                    play(
                      0,
                      0,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn1 btn"
                >
                  {board[0][0]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play(
                      0,
                      1,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn2 btn"
                >
                  {board[0][1]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play(
                      0,
                      2,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn3 btn"
                >
                  {board[0][2]}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    play(
                      1,
                      0,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn4 btn"
                >
                  {board[1][0]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play(
                      1,
                      1,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn5 btn"
                >
                  {board[1][1]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play(
                      1,
                      2,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn6 btn"
                >
                  {board[1][2]}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    play(
                      2,
                      0,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn7 btn"
                >
                  {board[2][0]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play(
                      2,
                      1,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn8 btn"
                >
                  {board[2][1]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play(
                      2,
                      2,
                      board,
                      winner,
                      oddEvenListt,
                      setOddEvenList,
                      setBoard,
                      setWinner
                    );
                  }}
                  className="btn9 btn"
                >
                  {board[2][2]}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const SinglePalyer = () => {
    return (
      <div className="play-container">
        <h1 className="title">TIC TAC TOE</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  onClick={() => {
                    play2(0, 0, board, winner, setBoard, setWinner);
                  }}
                  className="btn1 btn"
                >
                  {board[0][0]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play2(0, 1, board, winner, setBoard, setWinner);
                  }}
                  className="btn2 btn"
                >
                  {board[0][1]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play2(0, 2, board, winner, setBoard, setWinner);
                  }}
                  className="btn3 btn"
                >
                  {board[0][2]}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    play2(1, 0, board, winner, setBoard, setWinner);
                  }}
                  className="btn4 btn"
                >
                  {board[1][0]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play2(1, 1, board, winner, setBoard, setWinner);
                  }}
                  className="btn5 btn"
                >
                  {board[1][1]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play2(1, 2, board, winner, setBoard, setWinner);
                  }}
                  className="btn6 btn"
                >
                  {board[1][2]}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    play2(2, 0, board, winner, setBoard, setWinner);
                  }}
                  className="btn7 btn"
                >
                  {board[2][0]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play2(2, 1, board, winner, setBoard, setWinner);
                  }}
                  className="btn8 btn"
                >
                  {board[2][1]}
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    play2(2, 2, board, winner, setBoard, setWinner);
                  }}
                  className="btn9 btn"
                >
                  {board[2][2]}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };





  if (winner === "" && oddEvenListt.length !== 9 && StopGame) {
    if (PlayerState === "due") return DuePlayers();
    else return SinglePalyer();
  } else if (winner !== "") {
    return winnerMessgae(winner);
  } else {
    return winnerMessgae("Draw , there are no winner");
  }
}
