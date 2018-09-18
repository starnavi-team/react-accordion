import React from 'react';
import { shallow } from 'enzyme';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupTitle,
  AccordionGroupBody,
} from '../index';
import { StyledAccordionGroup } from './index';

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

  it('styledAccordionGroup receives custom className', () => {
    const styled = shallow(<StyledAccordionGroup className="tested" />);
    expect(styled.hasClass('tested')).toBe(true);
  });

  it('styledAccordionGroup receives custom styles', () => {
    const styled = shallow(<StyledAccordionGroup className="tested" style={{ color: 'green' }} />);
    expect(styled.find('.tested')).toHaveStyle('color', 'green');
  });

  it('should render correctly', () => {
    const component = shallow(<AccordionGroup />);
    expect(component).toMatchSnapshot();
  });
});
