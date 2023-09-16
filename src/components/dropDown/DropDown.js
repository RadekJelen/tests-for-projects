import './dropDown.css';
import '../sections/section.css';
import { useRef } from 'react';

export const DropDown = ({ name, nestingLevel, children }) => {
  const detailsRef = useRef(null);

  const collapseSection = () => {
    detailsRef.current.removeAttribute('open');
  };

  return (
    <details className="drop-down" ref={detailsRef}>
      <summary className="drop-down__title-container">
        {nestingLevel === 1 && (<h2 className="drop-down__title">{name}</h2>)}
        {nestingLevel === 2 && (<h3 className="drop-down__title">{name}</h3>)}
      </summary>
      <div className='drop-down__content'>
        {children}
        <button className="drop-down__collapse-button" onClick={collapseSection}>
          Collapse section
        </button>
      </div>
    </details>
  );
};