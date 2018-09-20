import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupBody,
  AccordionGroupTitle,
} from '../src/index';

const Example = () => (
  <div>
    <div>
      <Accordion>
        <AccordionGroup>
          <AccordionGroupTitle>
            <h1>PRESS ME</h1>
          </AccordionGroupTitle>
          <AccordionGroupBody>
            <h1>YOU CAN SEE ME</h1>
          </AccordionGroupBody>
        </AccordionGroup>
      </Accordion>
    </div>
  </div>
);

ReactDOM.render(<Example />, document.getElementById('demo'));
