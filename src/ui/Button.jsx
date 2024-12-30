import styled, { css } from "styled-components";

const sizes = {
  small: css`
    padding: 0.5rem 1.2rem;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    min-width: 93px;
    padding: 0.8rem 1.8rem;
    font-weight: 500;
  `,
  large: css`
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #eef2ff;
    background-color: rgba(59, 130, 246, 1);

    &:hover {
      background-color: rgba(37, 99, 235, 1);
    }
  `,
  secondary: css`
    color: #ffffff;
    background: inherit;
    border: 1px solid #1f2937;

    &:hover {
      background-color: #1f2937;
    }
  `,
  danger: css`
    color: #fef2f2;
    background-color: #dc2626;

    &:hover {
      background-color: #b91c1c;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.1);
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #e5e7eb;
    color: #9ca3af;
  }
  ${(props) => variations[props.$variation]}
  ${(props) => sizes[props.size]}
`;

Button.defaultProps = { $variation: "primary", size: "medium" };

export default Button;
