import { forwardRef } from 'react';
import { InputWrapper, InputStyled, LabelStyled, ErrorText, HelperText } from './styles';

const Input = forwardRef(({
  label,
  type = 'text',
  placeholder,
  error,
  helperText,
  ...rest
}, ref) => {
  return (
    <InputWrapper>
      {label && <LabelStyled>{label}</LabelStyled>}
      <InputStyled
        ref={ref}
        type={type}
        placeholder={placeholder}
        $hasError={!!error}
        {...rest}
      />
      {error && <ErrorText>{error.message || error}</ErrorText>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
