import {
  Accordion,
  AccordionGroup,
  AccordionGroupBody,
  AccordionGroupTitle,
} from '../index';
import AccordionComponent from '../Accordion';
import ItemComponent from '../AccordionGroup';
import ItemTitleComponent from '../AccordionGroupTitle';
import ItemBodyComponent from '../AccordionGroupBody';

describe('index test', () => {
  it('exports all the components properly', () => {
    expect(Accordion).toEqual(AccordionComponent);
    expect(AccordionGroup).toEqual(ItemComponent);
    expect(AccordionGroupTitle).toEqual(ItemTitleComponent);
    expect(AccordionGroupBody).toEqual(ItemBodyComponent);
  });
});
