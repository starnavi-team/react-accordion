import React from 'react';
import { shallow } from 'enzyme';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupTitle,
  AccordionGroupBody,
} from '../index';
import { StyledAccordionGroupBody } from './index';

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

  it('StyledAccordionGroupBody receives custom className', () => {
    const styled = shallow(<StyledAccordionGroupBody className="tested" />);
    expect(styled.hasClass('tested')).toBe(true);
  });

  it('StyledAccordionGroupBody receives custom styles', () => {
    const styled = shallow(<StyledAccordionGroupBody className="tested" style={{ color: 'green' }} />);
    expect(styled.find('.tested')).toHaveStyle('color', 'green');
  });

  it('should render correctly', () => {
    const component = shallow(<AccordionGroupBody />);
    expect(component).toMatchSnapshot();
  });
});
