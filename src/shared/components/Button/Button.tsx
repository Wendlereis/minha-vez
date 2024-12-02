import { StyledButton } from './styles';
import { ButtonProps } from './types';

export function Button({ label, type = 'button', onClick }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
}
