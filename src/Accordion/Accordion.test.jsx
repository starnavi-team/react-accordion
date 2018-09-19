import React from 'react';
import { shallow } from 'enzyme';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupTitle,
  AccordionGroupBody,
} from '../index';
import { StyledAccordion } from './index';

describe('Accordion', () => {
  it('Makes possible to set custom className', () => {
    const testAccordion = shallow(
      <Accordion className="testing">
        <AccordionGroup>
          <AccordionGroupTitle />
          <AccordionGroupBody />
        </AccordionGroup>
      </Accordion>,
    );
    expect(testAccordion.hasClass('testing')).toBe(true);
  });

  it('Makes possible to set custom styles', () => {
    const testAccordion = shallow(
      <Accordion className="testing" style={{ color: 'black' }}>
        <AccordionGroup>
          <AccordionGroupTitle />
          <AccordionGroupBody />
        </AccordionGroup>
      </Accordion>,
    );
    expect(testAccordion.find('.testing')).toHaveStyle('color', 'black');
  });

  it('styledAccordion receives custom className', () => {
    const styled = shallow(<StyledAccordion className="tested" />);
    expect(styled.hasClass('tested')).toBe(true);
  });

  it('styledAccordion receives custom styles', () => {
    const styled = shallow(<StyledAccordion className="tested" style={{ color: 'yellow' }} />);
    expect(styled.find('.tested')).toHaveStyle('color', 'yellow');
  });

  it('should render correctly', () => {
    const component = shallow(<Accordion />);
    expect(component).toMatchSnapshot();
  });
});
