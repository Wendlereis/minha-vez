export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'text';
}

export type StyledButtonProps = Pick<ButtonProps, 'variant'>;
