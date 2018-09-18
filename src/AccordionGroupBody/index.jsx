import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledAccordionGroupBody = styled.div.attrs({
  className: props => props.className,
  style: props => props.style,
})` 
`;

StyledAccordionGroupBody.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

const AccordionGroupBody = ({
  children,
  isOpened,
  style,
  className,
}) => (
  <div>
    {isOpened
    && (
      <StyledAccordionGroupBody style={style} className={className} isOpen={isOpened}>
        {children}
      </StyledAccordionGroupBody>
    )
    }
  </div>
);

AccordionGroupBody.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  isOpened: PropTypes.bool,
};

export default AccordionGroupBody;
