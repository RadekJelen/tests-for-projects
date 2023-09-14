import { Table } from './table/Table';
import tableData from '../../data/currencyConverter/testPlanTable.json';

export const TestPlan = () => (
  <>
    <span>ID: TP-CC</span>
    <p>Introduction: A website that is a currency converter from PLN to any other currency.</p>
    <p>
      {'The site is located at: '}
      <a href="https://radekjelen.github.io/currency-converter-React/">
        https://radekjelen.github.io/currency-converter-React/
      </a>
    </p>
    <span>Tested elements:</span>
    <ul className="section__list">
      <li>appearance based on the specification,</li>
      <li>functioning and validation of elements,</li>
      <li>event handling,</li>
      <li>functioning of the software interface.</li>
    </ul>
    <span>Non-testable elements:</span>
    <ul className="section__list">
      <li>Code and elements of the internal system infrastructure</li>
    </ul>
    <p>Testing approach: Exploratory, specification-based and software interface testing.</p>
    <p>Defined time: 3hrs., split into smaller sessions.</p>
    <span>Environment (most popular browser versions according to rankinkg.com on the day the tests started):</span>
    <ul className="section__list">
      <li>PC Chrome,</li>
      <li>PC FireFox,</li>
      <li>PC Opera,</li>
      <li>PC Edge.</li>
    </ul>
    <Table data={tableData} />
    <p>Additional time prepared for defect reporting and final report preparation.</p>
  </>
);
