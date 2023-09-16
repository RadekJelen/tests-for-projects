import React from 'react';
import './tests.css';
import data from '../../../data/currencyConverter/tests.json';
import { useState } from 'react';
import { DropDown } from '../../dropDown/DropDown';
import { TestCase } from './TestCase';

export const Tests = () => {
  const [testsType, setTestsType] = useState('');
  const [visibleTests, setVisibleTests] = useState('');

  const onTypeButtonClick = (type) => {
    setTestsType(type);
    setVisibleTests('');
  };

  const onCategoryButtonClick = (category) => setVisibleTests(category);

  return (
    <>
      <div className="wrapper">
        {data.map(button => (
          <button
          key={button.id}
          className="button"
          data-is-active={button.type === testsType}
          onClick={() => onTypeButtonClick(button.type)}
          >
            {button.name}
          </button>
        ))}
      </div>
      <div className="wrapper wrapper--with-margin">
        {testsType && data.find(button => button.type === testsType).categories.map(category => (
          <React.Fragment key={category.id}>
            <button
            className="button"
            data-is-active={category.name === visibleTests}
            onClick={() => onCategoryButtonClick(category.name)}
            >
              {category.name}
            </button>
            {category.name === visibleTests && (
              <div className='tests'>
                {category.tests.map(test => (
                  <DropDown key={test.id} name={test.name} nestingLevel={2}>
                    <TestCase data={test} />
                  </DropDown>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
