import React from 'react';
import { shallow } from 'enzyme';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupTitle,
  AccordionGroupBody,
} from '../index';

describe('AccordionGroupBody', () => {
  it('Makes possible to set custom className', () => {
    const testBody = shallow(
      <Accordion>
        <AccordionGroup>
          <AccordionGroupTitle />
          <AccordionGroupBody id="tested" className="testing" />
        </AccordionGroup>
      </Accordion>,
    );
    expect(testBody.find('#tested')).toHaveClassName('testing');
  });

  it('Makes possible to set custom styles', () => {
    const testBody = shallow(
      <Accordion>
        <AccordionGroup>
          <AccordionGroupTitle />
          <AccordionGroupBody id="tested" style={{ background: 'purple' }} />
        </AccordionGroup>
      </Accordion>,
    );
    expect(testBody.find('#tested')).toHaveStyle('background', 'purple');
  });
});
