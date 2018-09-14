import React from 'react';
import { shallow } from 'enzyme';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupTitle,
  AccordionGroupBody,
} from '../index';

describe('AccordionGroupTitle', () => {
  it('Makes possible to set custom className', () => {
    const testTitle = shallow(
      <Accordion>
        <AccordionGroup>
          <AccordionGroupTitle id="tested" className="testing" />
          <AccordionGroupBody />
        </AccordionGroup>
      </Accordion>,
    );
    expect(testTitle.find('#tested')).toHaveClassName('testing');
  });

  it('Makes possible to set custom styles', () => {
    const testTitle = shallow(
      <Accordion>
        <AccordionGroup>
          <AccordionGroupTitle id="tested" style={{ width: '100px' }} />
          <AccordionGroupBody />
        </AccordionGroup>
      </Accordion>,
    );
    expect(testTitle.find('#tested')).toHaveStyle('width', '100px');
  });
});
