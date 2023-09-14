import React from 'react';
import './tests.css';
import data from '../../../data/currencyConverter/tests.json';
import { useState } from 'react';
import { DropDown } from '../../dropDown/DropDown';
import { TestCase } from './TestCase';

export const Tests = () => {
  const [testsType, setTestsType] = useState('');
  const [visibleTests, setVisibleTests] = useState('');

  const onTypeButtonClick = (type) => setTestsType(type);

  const onCategoryButtonClick = (category) => setVisibleTests(category);

  return (
    <>
      {data.map(button => (
        <button key={button.id} className="button" onClick={() => onTypeButtonClick(button.type)}>
          {button.name}
        </button>
      ))}
      <div className="wrapper">
        {testsType && data.find(button => button.type === testsType).categories.map(category => (
          <React.Fragment key={category.id}>
            <button className="button" onClick={() => onCategoryButtonClick(category.name)}>
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
