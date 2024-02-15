import { Link } from "react-router-dom";
import "./WelcomePage.css";

export let PlayerState = '';

export default function WelcomePage() {
  const imgLink = "https://cdn-icons-png.flaticon.com/128/13622/13622461.png";
  return (
    <div className="welcome-container">
      <div className="img-container">
        <img src={imgLink} alt="" />
      </div>
      <h1 className="title">TIC TAC TOE</h1>
      <Link to={"/play"}>
        <p onClick={()=>{PlayerState = 'due'}} className="due">Play With Friend</p>
      </Link>
      <Link to={"/play"}>
        <p onClick={()=>{PlayerState = 'solo'}} className="solo">Play With AI</p>
      </Link>
    </div>
  );
}
