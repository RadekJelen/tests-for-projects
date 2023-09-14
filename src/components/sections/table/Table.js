import './table.css';
import { nanoid } from 'nanoid';

export const Table = ({ data }) => (
  <table className='table'>
    {data.caption && (
      <caption className="table__caption">{data.caption}</caption>
    )}
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
