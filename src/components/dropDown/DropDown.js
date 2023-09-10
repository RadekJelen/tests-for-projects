import './dropDown.css';

export const DropDown = ({ open }) => (
  <details className="section" open={open}>
    <summary className="section__title">Title</summary>
    <div className='section__content'>Content</div>
  </details>
);
