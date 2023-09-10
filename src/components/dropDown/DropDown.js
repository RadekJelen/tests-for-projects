import './dropDown.css';
import data from '../../data/currency-converter.json';

export const DropDown = ({ open, name }) => (
  data[name]
    ? (
      <details className="section" open={open}>
        <summary className="section__title">{data[name].title}</summary>
        <div className='section__content' dangerouslySetInnerHTML={{ __html: data[name].content }} />
      </details>
    ) : null
);
