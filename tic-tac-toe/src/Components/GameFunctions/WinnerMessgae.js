import { Link } from "react-router-dom";
export const winnerMessgae = (winner) => {
    return (
      <div className="winner-messgae">
        <div className="container">
          <p>{winner}</p>
          <div>
            <Link to={'/'}><button>Ok</button></Link>
          </div>
        </div>
      </div>
    );
  };