import './projectsList.css';
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from '../../icons/coins.svg';

export const ProjectsList = () =>
  <main className='main'>
    <h1 className='main__header'>Choose project</h1>
    <Link className='tile' to="/currency-converter">
      <div className='tile__icon-wrapper'><Icon className='tile__icon' /></div>
      <span className='tile__name'>Currency converter</span>
    </Link>
  </main>
  ;
