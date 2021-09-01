import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.2);
`
export const ListHeader = styled.div`
  display: flex;
  background: #f8f9fb;
  border-radius: 12px 12px 0 0;
`;

export const ListHeaderItem = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 16px;
  color: #464646;
`;

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  color: #222;
`;

export const AddRowButton = styled.div`
  height: 36px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 12px 12px;

  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`;

export const AddIcon = styled(MdAdd)`
  height: 24px;
  width: 24px;
`;