import './dropDown.css';
import '../sections/section.css';

export const DropDown = ({ name, nestingLevel, children }) => (
  <details className="drop-down">
    <summary className="drop-down__title-container">
      {nestingLevel === 1 && (<h2 className="drop-down__title">{name}</h2>)}
      {nestingLevel === 2 && (<h3 className="drop-down__title">{name}</h3>)}
    </summary>
    <div className='drop-down__content'>
      {children}
    </div>
  </details>
);
