import React, { MouseEvent, ReactNode } from 'react';
import { StyledButton } from './button.styles';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
