import React from 'react';
import { shallow } from 'enzyme';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupTitle,
  AccordionGroupBody,
} from '../index';
import { StyledAccordionGroupTitle } from './index';

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

  it('styledAccordionGroupTitle receives custom className', () => {
    const styled = shallow(<StyledAccordionGroupTitle className="tested" />);
    expect(styled.hasClass('tested')).toBe(true);
  });

  it('styledAccordionGroupTitle receives custom styles', () => {
    const styled = shallow(<StyledAccordionGroupTitle className="tested" style={{ color: 'green' }} />);
    expect(styled.find('.tested')).toHaveStyle('color', 'green');
  });

  it('should render correctly', () => {
    const component = shallow(<AccordionGroupTitle />);
    expect(component).toMatchSnapshot();
  });
});
