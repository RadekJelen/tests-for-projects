export const TestReport = () => (
  <>
    <span>ID: RzT-CC</span>

    <h3 className="section__subheader">Introduction</h3>
    <span>Testing method:</span>
    <ol className="section__list">
      <li>Tests referring to the provided specifications and appearance model of the application.</li>
      <li>Exploratory (functional) tests checking the operation of the application on different web browsers.</li>
    </ol>

    <h3 className="section__subheader">Subject of tests</h3>
    <p className="section__paragraph">
      {'Version available on GitHub ('}
      <a href="https://radekjelen.github.io/currency-converter-React/">
        https://radekjelen.github.io/currency-converter-React/
      </a>
      {')'}
    </p>

    <h3 className="section__subheader">Object features to not be tested</h3>
    <p className="section__paragraph">The semantic correctness of the code, its architecture and its decision points.</p>

    <h3 className="section__subheader">Object features to be tested</h3>
    <p className="section__paragraph">
      The user-accessible elements of the application are tested from a functional, usability and aesthetic
      point of view.
    </p>

    <h3 className="section__subheader">Test environment</h3>
    <p className="section__paragraph">
      Test environment: Google Chrome version 115.0.5, Mozilla FireFox version 116.0.2, Opera version
      101.0.1, Edge version 115.0.1.<br />Operating system name: Microsoft Windows 10 Pro 64bit.
    </p>

    <h3 className="section__subheader">Activities, techniques and tools</h3>
    <p className="section__paragraph">Techniques: expropriation tests (functional tests)</p>
    <p>Tools: TestLink, Postman</p>

    <h3 className="section__subheader">Pass/fail criteria for tests</h3>
    <span>For functional tests, a case is failed when at least one of the following effects has occurred:</span>
    <ul className="section__list">
      <li>non-compliance of the application functionality with the expected result,</li>
      <li>application suspension or crash,</li>
      <li>incorrect error message,</li>
      <li>unexpected operation of the application,</li>
      <li>a message misleading the user,</li>
      <li>negative message to the event.</li>
    </ul>

    <h3 className="section__subheader">Tasks to be performed</h3>
    <ol className="section__list">
      <li>Review the available documentation on the application under test.</li>
      <li>Determine the testability of the application.</li>
      <li>Carry out exploratory (functional) tests.</li>
      <li>Verification of layouts.</li>
      <li>Preparing the report.</li>
    </ol>

    <h3 className="section__subheader">Functional tests and their results</h3>
    <p className="section__paragraph">
      Testing consisted of simultaneously learning about the application, performing exploratory tests and
      creating test documentation. The tester went to work with strictly defined goals, such as checking the
      functionality of the application based on best practice.
    </p>

    <h3 className="section__subheader">Defects reported in the reporting system</h3>
    <p className="section__paragraph">The decision to correct the defects found should be made by the application tester.</p>

    <h3 className="section__subheader">Defects detected</h3>
    <p className="section__paragraph">
      <span className="section__bold">#1</span> Validation error in the value field<br />
      Browser: all browsers<br />
      Type of error: usability/functional.<br />
      Priority: medium.<br />
      The system gives the possibility to enter the letter "e" in the amount field "I have". Blocking functionality
    </p>
    <p>
      <span className="section__bold">#2</span> No limitation on the number of characters in the "I have" value field<br />
      Browser: all browsers<br />
      Type of error: usability.<br />
      Priority: low.<br />
      An unlimited number of characters can be entered in the 'I have' value field, resulting in the invalid results shown in the screenshot.
      <img className="section__image" src="images/currencyConverter/pageScreen-TR.jpg" alt="" />
    </p>
    <p>
      <span className="section__bold">#3</span> Frame animation does not work correctly in Firefox<br />
      Browser: Firefox.<br />
      Type of error: aesthetic.<br />
      Priority: low.<br />
      In Firefox, the animated container frame loses its smooth transition.
    </p>

    <h3 className="section__subheader">Summary</h3>
    <p className="section__paragraph">
      The application, has an eye-catching graphical interface. The user interface is clear and easy to read. Functions and validation are correct. The application's programming interface runs quickly and does not cause problems. The application works correctly on different types of browsers.
    </p>
  </>
);