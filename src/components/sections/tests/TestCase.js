import { Table } from "../table/Table";

export const TestCase = ({ data }) => {
  const tableHeaders = ["", "Step actions", "Expected Results", "Execution notes", "Execution status"]
  const { tableRows, summary, preconditions, importance, duration } = data;
  const tableData = { headers: tableHeaders, rows: tableRows };

  return (
    <>
      <p><span className="test__subtitle">Author: </span>RJ</p>
      <p><span className="test__subtitle">Summary: </span><br />{summary}</p>
      <p><span className="test__subtitle">Preconditions: </span><br />{preconditions}</p>
      <Table data={tableData} />
      <p>
        <span className="test__subtitle">Execution type: </span>Manual<br />
        <span className="test__subtitle">Importance: </span>{importance}<br />
        <span className="test__subtitle">Requirements: </span>None<br />
        <span className="test__subtitle">Keywords: </span>None<br />
      </p>
      <p>
        <span className="test__subtitle test__subtitle--greater">Execution Details</span><br />
        <span className="test__subtitle">Tester: </span>RJ<br />
        <span className="test__subtitle">Execution Result: </span>Passed<br />
        <span className="test__subtitle">Execution Mode: </span>Manual<br />
        <span className="test__subtitle">Execution duration (min): </span>{duration}<br />
      </p>
    </>
  );
};
