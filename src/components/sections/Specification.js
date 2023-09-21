import { CC_PAGE_LINK } from '../../consts.js'

export const Specification = () => (
  <>
    <h3 className="section__subheader">Requirements for the Currency-Converter website</h3>
    <p className="section__paragraph">
      A simple currency calculator. The page will have 2 fields. In one the user will enter the amount (PLN) and in the other the user will select any foreign currency from a list. The rates in the calculator will be downloaded from the public API exchangeratesapi.io, the user will be informed when the downloaded rates are up to date. There will be a single 'Recalculate' button on the page. When pressed, the user will be shown the result of the multiplication - by currency. The calculator will have a simple and eye-catching design. The page will have a background photo. The page will show a loading window on start-up and handle errors, which it will inform the user about. The page will show the current time and date.
    </p>
    <span>
      Project address: <a href={CC_PAGE_LINK} target='_blank'>{CC_PAGE_LINK}</a>
    </span>
    <h3 className="section__subheader">Project visualisation</h3>
    <img className="section__image" src="images/currencyConverter/pageScreen1.jpg" alt="" />
    <img className="section__image" src="images/currencyConverter/pageScreen2.jpg" alt="" />
  </>
);
