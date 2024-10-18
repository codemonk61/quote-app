/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Button = ({
  block = false,
  alignment = 'center',
  bgColor = '#7e8dfa',
  innerText,
  onClick = () => alert('Button clicked!'),
  marginTop = '0',
  marginBottom = '0',
  marginLeft = '0',
  marginRight = '0',
}) => {
  // CSS styles using Emotion
  const buttonWrapper = css`
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
  `;

  const buttonStyle = css`
    display: ${block ? 'block' : 'inline-block'};
    width: ${block ? '100%' : 'auto'};
    text-align: ${alignment};
    background-color: ${bgColor};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  `;

  return (
    <div css={buttonWrapper}>
      <button css={buttonStyle} onClick={onClick}>
        {innerText}
      </button>
    </div>
  );
};

// Prop Types Validation
Button.propTypes = {
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  block: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'center', 'right', 'middle']),
  bgColor: PropTypes.string,
  innerText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
