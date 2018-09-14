import React from 'react';
import { shallow } from 'enzyme';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupTitle,
  AccordionGroupBody,
} from '../index';

describe('AccordionGroup', () => {
  it('Makes possible to set custom className', () => {
    const testAccordionGroup = shallow(
      <Accordion>
        <AccordionGroup id="tested" className="testing">
          <AccordionGroupTitle />
          <AccordionGroupBody />
        </AccordionGroup>
      </Accordion>,
    );
    expect(testAccordionGroup.find('#tested')).toHaveClassName('testing');
  });

  it('Makes possible to set custom styles', () => {
    const testAccordionGroup = shallow(
      <Accordion>
        <AccordionGroup id="tested" style={{ position: 'absolute' }}>
          <AccordionGroupTitle />
          <AccordionGroupBody />
        </AccordionGroup>
      </Accordion>,
    );
    expect(testAccordionGroup.find('#tested')).toHaveStyle('position', 'absolute');
  });
});
