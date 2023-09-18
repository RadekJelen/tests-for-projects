import './dropDown.scss';
import '../sections/section.scss';
import { useRef } from 'react';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';

export const DropDown = ({ name, nestingLevel, children }) => {
  const detailsRef = useRef(null);

  const collapseSection = () => {
    detailsRef.current.removeAttribute('open');
  };

  return (
    <details
      className="drop-down"
      data-is-nested={nestingLevel === 2}
      ref={detailsRef}
    >
      <summary className="drop-down__title-container">
        {nestingLevel === 1 && (<h2 className="drop-down__title">{name}</h2>)}
        {nestingLevel === 2 && (<h3 className="drop-down__title">{name}</h3>)}
        <Arrow className="drop-down__title-icon" />
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