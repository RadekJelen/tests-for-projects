import './dropDown.css';
import data from '../../data/currency-converter.json';
import { SectionTable } from '../sectionTable/SectionTable';

export const DropDown = ({ open, name }) => {
  const sectionData = data[name];

  return (
    sectionData
      ? (
        <details className="section" open={open}>
          <summary className="section__title-container">
            <h2 className="section__title">{sectionData.title}</h2>
          </summary>
          <div className='section__content'>
            <div dangerouslySetInnerHTML={{ __html: sectionData.content }} />
            {sectionData.table
              ? <SectionTable data={sectionData.table} />
              : null
            }
            {sectionData.additionalInfo
              ? <p>{sectionData.additionalInfo}</p>
              : null
            }
          </div>
        </details>
      ) : null
  );
};
