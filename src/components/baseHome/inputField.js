import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid #dcdcdc;
  font-size: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px rgba(0, 122, 255, 0.2);
  }
`;

export default InputField;
