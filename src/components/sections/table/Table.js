import './table.css';
import projectData from '../../../data/currency-converter.json';
import { nanoid } from 'nanoid';

export const Table = ({ name }) => {
  const data = projectData[name].table;

  return (
    <table className='table'>
      <caption className="table__caption">{data.caption}</caption>
      <thead>
        <tr className='table__header'>
          {data.headers.map(header => (
            <th key={nanoid()} className='table__cell'>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map(row => (
          <tr key={nanoid()}>
            {row.map(cell => (
              <td key={nanoid()} className='table__cell'>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
