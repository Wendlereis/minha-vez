import { StyledButton } from './styles';
import { ButtonProps } from './types';

export function Button({
  label,
  type = 'button',
  onClick,
  variant = 'contained',
}: ButtonProps) {
  return (
    <StyledButton variant={variant} type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
}
