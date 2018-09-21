import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  Accordion,
  AccordionGroup,
  AccordionGroupBody,
  AccordionGroupTitle,
} from '../src/index';

const MainWrapper = styled.div`
  min-height: 90vh;
  text-align: center;
  background: #d4d9dd;
  padding: 30px;
`;

const Header = styled.h2`
  padding: 20px;
  color: #333333;
  margin-bottom: 40px;
`;

const Footer = styled.div`
  margin-top: 60px;
  font-size: 20px;
`;

const AccordionWrapper = styled.div`
  display: flex;
`;

const RightAccordion = styled.div`
  flex: 1;
`;

const LeftAccordion = styled.div`
  flex: 1;
`;

const TitleOne = styled(AccordionGroupTitle)`
  cursor: pointer;
  &:hover {
  background: #c2c3c4;
`;

const titleStyles = {
  padding: '20px 10px',
  fontSize: '30px',
  fontWeight: '700',
};

const bodyStyles = {
  padding: '20px 10px',
  fontSize: '25px',
  fontWeight: '700',
  background: '#cccccc',
};

const Example = () => (
  <MainWrapper>
    <Header>
      Here are some examples of usage
    </Header>
    <AccordionWrapper>
      <RightAccordion>
        <Accordion>
          <AccordionGroup>
            <TitleOne style={titleStyles}>
              SIMPLE 1
            </TitleOne>
            <AccordionGroupBody style={bodyStyles}>
              YOU CAN SEE ONE
            </AccordionGroupBody>
          </AccordionGroup>
          <AccordionGroup>
            <TitleOne style={titleStyles}>
              SIMPLE 2
            </TitleOne>
            <AccordionGroupBody style={bodyStyles}>
              YOU CAN SEE TWO
            </AccordionGroupBody>
          </AccordionGroup>
          <AccordionGroup>
            <TitleOne style={titleStyles}>
              SIMPLE 3
            </TitleOne>
            <AccordionGroupBody style={bodyStyles}>
              YOU CAN SEE THREE
            </AccordionGroupBody>
          </AccordionGroup>
        </Accordion>
      </RightAccordion>
      <LeftAccordion>
        <Accordion>
          <AccordionGroup>
            <TitleOne style={titleStyles}>
              NESTED ACCORDION
            </TitleOne>
            <AccordionGroupBody style={{ background: '#cccccc' }}>
              <Accordion>
                <AccordionGroup>
                  <TitleOne style={{ padding: '20px 10px', fontSize: '25px', fontWeight: '700' }}>
                    NESTING
                  </TitleOne>
                  <AccordionGroupBody style={{ padding: '25px 10px', fontSize: '21px', background: '#c1c1c0' }}>
                    There is a possibility to nest accordion...
                  </AccordionGroupBody>
                </AccordionGroup>
                <AccordionGroup>
                  <TitleOne style={{ padding: '20px 10px', fontSize: '25px', fontWeight: '700' }}>
                    DOUBLE NESTING
                  </TitleOne>
                  <AccordionGroupBody style={{ background: '#c1c1c0' }}>
                    <Accordion>
                      <AccordionGroup>
                        <TitleOne style={{ padding: '20px 10px', fontSize: '25px', fontWeight: '700' }}>
                          PRESS NESTED
                        </TitleOne>
                        <AccordionGroupBody style={{ padding: '25px 10px', fontSize: '21px', background: '#b3b3b1' }}>
                          Nest again and again ...
                        </AccordionGroupBody>
                      </AccordionGroup>
                    </Accordion>
                  </AccordionGroupBody>
                </AccordionGroup>
              </Accordion>
            </AccordionGroupBody>
          </AccordionGroup>
        </Accordion>
      </LeftAccordion>
    </AccordionWrapper>
    <Footer>
      <p><b>To style this examples styled components and in-line styles were used.</b></p>
      <p>
        The main reason not to set default styles for the Accordion components is to free
        a developer to style them in his own way.
      </p>
    </Footer>
  </MainWrapper>
);

ReactDOM.render(<Example />, document.getElementById('demo'));
