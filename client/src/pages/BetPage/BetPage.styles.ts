import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 32px;
  box-sizing: border-box;
  height: calc(100% - 64px);
`;

export const InfoBoxes = styled.div`
  display: flex;
  height: 150px;
  margin-bottom: 16px;
`;

export const QuickFilters = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

export const FilterTitle = styled.h3`
  color: white;
  margin: 0 16px 0 0;
`;

export const FilterButton = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 5px;
  background: #f3f3f3;
  border: none;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3);
`;