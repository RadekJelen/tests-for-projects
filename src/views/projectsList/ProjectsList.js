import './projectsList.css';
import { Link } from "react-router-dom";

export const ProjectsList = () => (
  <main className='main'>
    <h1>Choose project</h1>
    <div className='tile'>
      <Link className='tile__name' to="/currency-converter">Currency converter</Link>
    </div>
  </main>
);
