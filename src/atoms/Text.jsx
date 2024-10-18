/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Text = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  text,
  color,
  fontSize,
  fontWeight,
  ellipsis,
  alignment,
  RenderAs = 'p'
}) => {
  // CSS styles using Emotion
  const textStyle = css`
    margin-top: ${marginTop || '0'};
    margin-bottom: ${marginBottom || '0'};
    margin-left: ${marginLeft || '0'};
    margin-right: ${marginRight || '0'};
    color: ${color || 'black'};
    font-size: ${fontSize || '16px'};
    font-weight: ${fontWeight || 'normal'};
    text-align: ${alignment || 'left'}; /* Set text alignment */
    white-space: ${ellipsis ? 'nowrap' : 'normal'};
    overflow: ${ellipsis ? 'hidden' : 'visible'};
    text-overflow: ${ellipsis ? 'ellipsis' : 'clip'};
  `;

  return <RenderAs css={textStyle}>{text}</RenderAs>;
};

// Prop Types Validation and Default Props
Text.propTypes = {
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  ellipsis: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'right', 'center', 'justify']), // Define alignment options
};

Text.defaultProps = {
  marginTop: '0',
  marginBottom: '0',
  marginLeft: '0',
  marginRight: '0',
  color: 'black',
  fontSize: '16px',
  fontWeight: 'normal',
  ellipsis: false,
  alignment: 'left', // Default alignment
};

export default Text;
