import './goBackLink.css';
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from '../../icons/arrowLeft.svg';

export const GoBackLink = () => (
  <div className="go-back">
    <Arrow className="go-back__icon" />
    <Link className="go-back__link" to="/">Back</Link>
  </div>
);