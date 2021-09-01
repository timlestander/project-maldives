import styled from 'styled-components';
import { Wrapper as TextInputWrapper } from '../TextInput/TextInput.styles';
import { Wrapper as DropdownInputWrapper } from '../DropdownInput/DropdownInput.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 24px;

  ${TextInputWrapper}, ${DropdownInputWrapper} {
    margin: 6px;  
    flex: 0 0 calc(33% - 12px);
  }

  .buttons {
    width: 100%;
    padding: 6px 0 6px 6px;

    button {
      padding: 12px 24px;
      background: gold;
      border: none;
      margin-right: 12px;
      color: #333;
      font-weight: bold;
      border-radius: 6px;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  h3 {
    flex: 0 0 100%;
    margin: 16px 16px 16px 6px;
  }
`

export const AddBetRow = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #fdfdfd;
  border: 1px solid #e6e6e6;
  padding: 12px 24px 12px 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.09);

  ${TextInputWrapper}, ${DropdownInputWrapper} {
    margin: 6px;  
    flex: 0 0 calc(25% - 12px);
  }

  .delete {
    position: absolute;
    top: 12px;
    right: 12px;
    font-weight: bold;
    cursor: pointer;
  }
`;