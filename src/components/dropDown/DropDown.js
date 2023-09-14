import './dropDown.css';
import '../sections/section.css';

export const DropDown = ({ open, name, children }) => (
  <details className="drop-down" open={open}>
    <summary className="drop-down__title-container">
      <h2 className="drop-down__title">{name}</h2>
    </summary>
    <div className='drop-down__content'>
      {children}
    </div>
  </details>
);
