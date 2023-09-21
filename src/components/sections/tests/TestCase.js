import { Table } from "../table/Table";
import { CC_PROJECT_LINK, CC_API_RESULLTS, CC_API_LINK } from "../../../consts";

export const TestCase = ({ data }) => {
  const tableHeaders = ["", "Step actions", "Expected Results", "Execution notes", "Execution status"]
  const { tableRows, summary, preconditions, importance, duration } = data;
  const tableData = { headers: tableHeaders, rows: tableRows };

  const getPreconditions = () => {
    const basicsText =  <>The page must be opened in any browser <a href={CC_PROJECT_LINK} target='_blank'>{CC_PROJECT_LINK}</a>.</>;

    switch (preconditions) {
      case 'basics':
        return basicsText;
      case 'withBrowsers':
        return <>{basicsText} The browsers taking part in the tests are: Chrome, FireFox, Opera, MS Edge (in the latest versions).</>
      case 'withApiLinks':
        return <>{basicsText} Data for checking results <a href={CC_API_RESULLTS} target='_blank'>{CC_API_RESULLTS}</a>. Api website <a href={CC_API_LINK} target='_blank'>{CC_API_LINK}</a></>
    }
  }

  return (
    <>
      <p><span className="test__subtitle">Author: </span>RJ</p>
      <p><span className="test__subtitle">Summary: </span><br />{summary}</p>
      <p><span className="test__subtitle">Preconditions: </span><br />{getPreconditions()}</p>
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
