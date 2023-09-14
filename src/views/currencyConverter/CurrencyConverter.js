import { DropDown } from "../../components/dropDown/DropDown";
import { Specification } from "../../components/sections/Specification";
import { TestPlan } from "../../components/sections/TestPlan";
import { TestReport } from "../../components/sections/TestReport";
import { Tests } from "../../components/sections/tests/Tests";

export const CurrencyConverter = () => (
  <div className="container">
    <h1>Currency Converter</h1>
    <DropDown open name={'Specification'} nestingLevel={1}>
      <Specification />
    </DropDown>
    <DropDown name={'Test Plan'} nestingLevel={1}>
      <TestPlan />
    </DropDown>
    <DropDown name={'Tests'} nestingLevel={1}>
      <Tests />
    </DropDown>
    <DropDown name={'Test Report'} nestingLevel={1}>
      <TestReport />
    </DropDown>
  </div>
);
