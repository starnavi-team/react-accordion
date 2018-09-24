import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  Accordion,
  AccordionGroup,
  AccordionGroupBody,
  AccordionGroupTitle,
} from '../src/index';
import { SimpleExample, SimpleExampleText, NestedExample } from './copyPaste';
import icon from '../assets/icons/favicon.jpg';
import './demo.scss';

const MainWrapper = styled.div`
  min-height: 100vh;
  position: relative;
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
  min-height: 100px;
  font-size: 20px;
  padding: 10px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background: #d4d9dd;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const RightAccordion = styled.div`
  flex: 1;
  min-width: 400px;
  
  @media (max-width: 500px) {
    min-width: 260px;
  }
`;

const LeftAccordion = styled.div`
  flex: 1;
  min-width: 450px;
  
  @media (max-width: 500px) {
    min-width: 260px;
  }
`;

const Boss = styled(Accordion)`
  border: 1px solid #cccccc;
  border-radius: 3px;
  margin: 0 auto;
  background: #9EBDCC;
`;

const Item = styled(AccordionGroup)`
  border-top: 1px solid #cccccc;
  
  &:first-of-type {
    border-top: none;
  }  
`;

const TitleOne = styled(AccordionGroupTitle)`
  cursor: pointer;  
  
  &:hover {
    background: #c2c3c4;
  }
`;

const Description = styled.div`
  padding: 10px;
  background: #1a436f;
  color: #f8f8f8;
  font-size: 18px;
`;

const OpenSource = styled.div`
  width: 80%;
  height: 40px;
  margin: 0 auto;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
`;

const SourceBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  
  &:focus {
  outline: none;
  }
  
  &:active {
  color: red;
  }
`;

const CopyExample = styled.div`
  margin: 10px;
  padding: 10px;
  background: #ccccc1;
  text-align: left;
  border: 1px solid #ccccc2;
  overflow-x: auto;
  line-height: 1.5;
`;

const CopySpan = styled.span`
  cursor: pointer;
  margin-left: 3%;
  padding: 5px;
   
  &:hover {
  background: #cccccc;
  }
  
  &:active {
  background: #999999;
`;

const StyledComponent = styled.div`
  width: 75%;
  min-height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: #9ca3c1;
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

class Example extends Component {
  state = {
    firstIsOpen: false,
    secondIsOpen: false,
    copied: false,
  };

  onCopyAreaToggle = (number) => {
    if (number === 1) {
      this.setState(prevState => ({ firstIsOpen: !prevState.firstIsOpen }));
    } else {
      this.setState(prevState => ({ secondIsOpen: !prevState.secondIsOpen }));
    }
  }


  render() {
    const { firstIsOpen } = this.state;
    return (
      <MainWrapper>
        <Header>
          Here are some examples of usage
        </Header>
        <AccordionWrapper>
          <RightAccordion>
            <OpenSource>
              <SourceBtn onClick={() => this.onCopyAreaToggle(1)}>source &lt; /&gt;</SourceBtn>
            </OpenSource>
<Accordion className="accordion" style={{ width: '80%' }}>
  <AccordionGroup className="a-group">
    <AccordionGroupTitle className="a-group-title" style={titleStyles}>
      Simple example
    </AccordionGroupTitle>
    <AccordionGroupBody style={bodyStyles}>
      This is the example of simple accordion. This body contains simple text.
    </AccordionGroupBody>
  </AccordionGroup>
  <Item>
    <AccordionGroupTitle className="a-group-title" style={titleStyles}>
      Simple example with image
    </AccordionGroupTitle>
    <AccordionGroupBody style={bodyStyles}>
      <img src="https://picsum.photos/300/200/?random" alt="random" />
    </AccordionGroupBody>
  </Item>
  <Item>
    <AccordionGroupTitle className="a-group-title a-group-title__black" style={titleStyles}>
      <img src={icon} alt="icon" />
    </AccordionGroupTitle>
    <AccordionGroupBody style={bodyStyles}>
      <StyledComponent>
        It is a styled component
      </StyledComponent>
    </AccordionGroupBody>
  </Item>
</Accordion>
            {firstIsOpen && (
            <div style={{ textAlign: 'left', marginTop: '10px' }}>
              <CopyToClipboard
                text={SimpleExampleText}
                onCopy={() => this.setState({ copied: true })}
              >
                <CopySpan style={{ cursor: 'pointer', marginLeft: '3%' }}>COPY</CopySpan>
              </CopyToClipboard>
              <CopyExample>
                {SimpleExample}
              </CopyExample>
            </div>
            )
            }
          </RightAccordion>
          <LeftAccordion>
            <Boss>
              <Item>
                <TitleOne style={titleStyles}>
                  Accordion
                </TitleOne>
                <AccordionGroupBody style={{ background: '#cccccc' }}>
                  <Description>
                    <p>Main component, contains block/blocks(AccordionGroups)</p>
                    <p>
                      Optional props:
                      {' '}
                      <b>style</b>
                      {' '}
                      and
                      {' '}
                      <b>className</b>
                    </p>
                  </Description>
                  <Boss>
                    <Item>
                      <TitleOne style={{ padding: '20px 10px', fontSize: '25px', fontWeight: '700' }}>
                        AccordionGroup
                      </TitleOne>
                      <AccordionGroupBody>
                        <Description>
                          <p>
                            Sub-component of the Accordion, contains two children:
                            AccordionGroupTitle and AccordionGroupBody
                          </p>
                          <p>
                            Optional props:
                            {' '}
                            <b>style</b>
                            {' '}
                            and
                            {' '}
                            <b>className</b>
                          </p>
                        </Description>
                        <Item>
                          <TitleOne style={{ padding: '20px 10px', fontSize: '25px', fontWeight: '700' }}>
                            AccordionGroupTitle
                          </TitleOne>
                          <AccordionGroupBody>
                            <Description>
                              <p>
                                Sub-component of the AccordionGroup of the Accordion. Put here
                                any element you you need: text, button, image ... .
                                Via click toggles opening/closing of
                                the AccordionGroupBody component.
                              </p>
                              <p>
                                Optional props:
                                {' '}
                                <b>style</b>
                                {' '}
                                and
                                {' '}
                                <b>className</b>
                              </p>
                            </Description>
                          </AccordionGroupBody>
                        </Item>
                        <Item>
                          <TitleOne style={{ padding: '20px 10px', fontSize: '25px', fontWeight: '700' }}>
                            AccordionGroupBody
                          </TitleOne>
                          <AccordionGroupBody>
                            <Description>
                              <p>
                                Sub-component of the AccordionGroup of the Accordion.
                                Put here all the info you want to visualize by clicking on the
                                AccordionGroupTitle. It is possible to put into AccordionGroupBody
                                any element you need.
                              </p>
                              <p>
                                Optional props:
                                {' '}
                                <b>style</b>
                                {' '}
                                and
                                {' '}
                                <b>className</b>
                              </p>
                            </Description>
                          </AccordionGroupBody>
                        </Item>
                      </AccordionGroupBody>
                    </Item>
                  </Boss>
                </AccordionGroupBody>
              </Item>
            </Boss>
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
  }
}

ReactDOM.render(<Example />, document.getElementById('demo'));
