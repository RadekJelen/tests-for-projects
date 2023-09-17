import './goBackLink.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from '../../icons/arrowLeft.svg';

export const GoBackLink = () => (
  <Link className="go-back" to="/">
    <Arrow className="go-back__icon" />
    <span className="go-back__link">Back</span>
  </Link>
);