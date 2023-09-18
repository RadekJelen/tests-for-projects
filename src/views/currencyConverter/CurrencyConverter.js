import { GoBackLink } from "../../components/goBackLink/GoBackLink";
import { DropDown } from "../../components/dropDown/DropDown";
import { Specification } from "../../components/sections/Specification";
import { TestPlan } from "../../components/sections/TestPlan";
import { TestReport } from "../../components/sections/TestReport";
import { Tests } from "../../components/sections/tests/Tests";
import { ArrowUp } from "../../components/arrowUp/ArrowUp";

export const CurrencyConverter = () => (
  <div className="container">
    <GoBackLink />
    <h1 className="title">Currency Converter</h1>
    <DropDown name={'Specification'} nestingLevel={1}>
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
    <ArrowUp />
  </div>
);
