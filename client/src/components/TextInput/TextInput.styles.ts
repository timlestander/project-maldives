import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #333;
`;

export const InputField = styled.input`
  padding: 8px 12px;
  border: 1px solid gray;
  outline: none;

  &.valid {
    background: #cefbc8;
  }

  &.invalid {
    background: #ffe7e7;
  }
`;