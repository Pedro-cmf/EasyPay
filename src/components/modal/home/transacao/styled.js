import styled from 'styled-components';

export const TransacaoModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const TransacaoContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 10px;
  text-align: left;
`;

export const InputField = styled.input`
  padding: 12px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  padding: 12px;
  background-color: #007aff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    background-color: #005bb5;
  }
`;

export const ContactList = styled.div`
  width: 100%;
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-bottom: 10px;

  strong {
    display: block;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;
