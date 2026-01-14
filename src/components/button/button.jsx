import { ButtonStyled } from './styles';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) {
  return (
    <ButtonStyled
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
