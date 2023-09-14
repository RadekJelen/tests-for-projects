import { DropDown } from "../../components/dropDown/DropDown";
import { Specification } from "../../components/sections/Specification";
import { TestPlan } from "../../components/sections/TestPlan";

export const CurrencyConverter = () => (
  <div className="container">
    <h1>Currency Converter</h1>
    <DropDown open name={'Specification'}><Specification/></DropDown>
    <DropDown name={'Test Plan'}><TestPlan/></DropDown>
  </div>
);
