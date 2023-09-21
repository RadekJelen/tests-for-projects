import './projectsList.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Coins } from '../../icons/coins.svg';
import { ReactComponent as Pen } from '../../icons/pen.svg';

export const ProjectsList = () =>
  <main className='main'>
    <h1 className='main__header'>Choose project</h1>
    <div className='main__tile-container'>
      <Link className='tile' to="/currency-converter">
        <div className='tile__icon-wrapper'><Coins className='tile__icon' /></div>
        <span className='tile__name'>Currency converter</span>
      </Link>
      <div className='tile tile--work'>
        <div className='tile__icon-wrapper'><Pen className='tile__icon' /></div>
        <span className='tile__name'>work in progress...</span>
      </div>
    </div>
  </main>
  ;
