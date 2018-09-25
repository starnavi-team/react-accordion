import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  Accordion,
  AccordionGroup,
  AccordionGroupBody,
  AccordionGroupTitle,
} from '../src/index';
import {
  SimpleExample,
  SimpleExampleText,
  NestedExample,
  NestedExampleText,
} from './copyPaste';
import icon from '../assets/icons/favicon.png';
import './demo.scss';

const MainWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  text-align: center;
  padding: 0 30px;
`;

const Header = styled.h2`
  color: #333333;
  margin-bottom: 40px;
`;

const Footer = styled.div`
  font-size: 20px;
  padding: 10px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RightAccordion = styled.div`
  flex: 1;
  min-width: 400px;
  margin-bottom: 100px;
  
   @media (max-width: 909px) {
    margin-top: 30px;
    margin-bottom: 150px;
  }
  
  @media (max-width: 500px) {
    min-width: 260px;
  } 
  
  @media (max-width: 400px) {
    min-width: 200px;
  }
`;

const LeftAccordion = styled.div`
  flex: 1;
  min-width: 450px;
  margin-bottom: 100px;
  
  @media (max-width: 909px) {
    margin-bottom: 0;
  }
  
  @media (max-width: 500px) {
    min-width: 260px;
  }
  
  @media (max-width: 400px) {
    min-width: 200px;
  }
`;

const Description = styled.div`
  padding: 10px;
  background: #1a436f;
  color: #f8f8f8;
  font-size: 18px;
`;

const OpenSource = styled.div`
  height: 40px;
  margin: 0 auto;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
`;

const SourceBtn = styled.button`
  font-weight: 600;
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
  background: #cfd0d2;
  text-align: left;
  border: 1px solid #ccccc2;
  overflow-x: auto;
  line-height: 1.5;
`;

const CopyBtn = styled.button`
  cursor: pointer;
  margin-left: 3%;
  padding: 5px;
  font-weight: 600;
  border: none;
  background: #ffffff;
   
  &:hover {
  background: #cccccc;
  }
  
  &:focus {
  outline: none;
  }
  
  &:active {
  background: #999999;
  outline: none;
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

const vanishing = keyframes`
  0% {
    display: block;
    opacity: 1;
    transform: scale(1);
  }
  99% {
    display: block;
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

const Notification = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #ffffff;
  font-size: 18px;
  position: fixed;
  z-index: 1000;
  bottom: 0px;
  left: calc(50% - 150px);
  background: #052f44;
  ${(props) => {
    const { isCopied } = props;
    if (isCopied) {
      return `
        animation: ${vanishing} 4s ease-in forwards;
        animation-fill-mode: forwards; 
      `;
    }
    return null;
  }
}
`;

const titleStyles = {
  fontWeight: '700',
};

const bodyStyles = {
  padding: '20px 10px',
  fontSize: '20px',
  fontWeight: '700',
  background: '#cccccc',
};

class Example extends Component {
  state = {
    firstIsOpen: false,
    secondIsOpen: false,
    copiedFromFirst: false,
    copiedFromSecond: false,
  };

  onCopyAreaToggle = (number) => {
    if (number === 1) {
      this.setState(prevState => ({
        firstIsOpen: !prevState.firstIsOpen,
        secondIsOpen: false,
      }));
    } else if (number === 2) {
      this.setState(prevState => ({
        secondIsOpen: !prevState.secondIsOpen,
        firstIsOpen: false,
      }));
    }
  }


  render() {
    const {
      firstIsOpen,
      secondIsOpen,
      copiedFromSecond,
      copiedFromFirst,
    } = this.state;
    return (
      <MainWrapper>
        <Header>
          Here are some examples of usage
        </Header>
        <AccordionWrapper>
          <LeftAccordion>
            <OpenSource style={{ width: '80%' }}>
              <SourceBtn onClick={() => this.onCopyAreaToggle(1)}>
                source &lt; /&gt;
                {firstIsOpen && <span> below </span>}
              </SourceBtn>
            </OpenSource>
            <Accordion className="accordion" style={{ width: '80%' }}>
              <AccordionGroup className="accordion--group">
                <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>
                  Simple example
                </AccordionGroupTitle>
                <AccordionGroupBody style={bodyStyles}>
                  This is the example of simple accordion. This body contains simple text.
                </AccordionGroupBody>
              </AccordionGroup>
              <AccordionGroup className="accordion--group">
                <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>
                  Simple example with image
                </AccordionGroupTitle>
                <AccordionGroupBody style={bodyStyles}>
                  <img src="https://picsum.photos/300/200/?random" alt="random" style={{ width: '100%' }} />
                </AccordionGroupBody>
              </AccordionGroup>
              <AccordionGroup className="accordion--group">
                <AccordionGroupTitle className="accordion--group-title accordion--group-title__black" style={titleStyles}>
                  <img src={icon} alt="icon" />
                </AccordionGroupTitle>
                <AccordionGroupBody style={bodyStyles}>
                  <StyledComponent>
                    It is a styled component
                  </StyledComponent>
                </AccordionGroupBody>
              </AccordionGroup>
            </Accordion>
            {firstIsOpen && (
            <div style={{ textAlign: 'left', marginTop: '10px' }}>
              <CopyToClipboard
                text={SimpleExampleText}
                onCopy={() => this.setState({
                  copiedFromFirst: true,
                  copiedFromSecond: false,
                })}
              >
                <CopyBtn>copy</CopyBtn>
              </CopyToClipboard>
              <CopyExample>
                {SimpleExample}
              </CopyExample>
            </div>
            )
            }
          </LeftAccordion>
          <RightAccordion>
            <OpenSource>
              <SourceBtn onClick={() => this.onCopyAreaToggle(2)}>
                source &lt; /&gt;
                {secondIsOpen && <span> below </span>}
              </SourceBtn>
            </OpenSource>
            <Accordion className="accordion">
              <AccordionGroup className="accordion--group">
                <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>
                  Accordion-(nested description)
                </AccordionGroupTitle>
                <AccordionGroupBody>
                  <Description>
                    <p>Main component, contains block/blocks (AccordionGroups)</p>
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
                  <Accordion className="accordion accordion__nested">
                    <AccordionGroup className="accordion--group">
                      <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>
                        AccordionGroup
                      </AccordionGroupTitle>
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
                        <AccordionGroup className="accordion--group">
                          <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>
                            AccordionGroupTitle
                          </AccordionGroupTitle>
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
                        </AccordionGroup>
                        <AccordionGroup className="accordion--group">
                          <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>
                            AccordionGroupBody
                          </AccordionGroupTitle>
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
                        </AccordionGroup>
                      </AccordionGroupBody>
                    </AccordionGroup>
                  </Accordion>
                </AccordionGroupBody>
              </AccordionGroup>
            </Accordion>
            {secondIsOpen && (
              <div style={{ textAlign: 'left', marginTop: '10px' }}>
                <CopyToClipboard
                  text={NestedExampleText}
                  onCopy={() => this.setState({
                    copiedFromFirst: false,
                    copiedFromSecond: true,
                  })}
                >
                  <CopyBtn>copy</CopyBtn>
                </CopyToClipboard>
                <CopyExample>
                  {NestedExample}
                </CopyExample>
              </div>
            )
            }
          </RightAccordion>
        </AccordionWrapper>
        {copiedFromFirst
        && (
        <Notification isCopied={copiedFromFirst}>
          copied simple example
        </Notification>
        )
        }
        {copiedFromSecond
        && (
        <Notification isCopied={copiedFromSecond}>
          copied nested example
        </Notification>
        )
        }
        <Footer>
          <p>
            In these examples are shown the ways of passing props to
            style the components.
          </p>
        </Footer>
      </MainWrapper>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('demo'));
