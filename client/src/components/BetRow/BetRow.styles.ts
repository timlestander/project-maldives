import styled from 'styled-components';

export const Base = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  &.active {
    background: lightblue !important;

    ${Base} {
      background: #7fbcd0;
      border-bottom: 1px solid #88c2d6;
    }
  }

  &.odd {
    background: #f8f9fb;
  }

  &:hover {
    cursor: pointer;
    background: #ffffd5;
  }
`;

export const Details = styled.div`
  padding: 12px 12px 12px 32px;
  display: flex;
  flex-direction: column;
`;

export const DetailsListHeader = styled.div`
  display: flex;
`

export const DetailsListHeaderItem = styled.div`
  padding: 8px 4px;
  flex: 1;
  font-weight: bold;
`

export const DetailsListBody = styled.div`
  display: flex;
`;

export const DetailsListBodyItem = styled.div`
  padding: 8px 4px;
  flex: 1;
`

export const ListItem = styled.div`
  flex: 1;
  padding: 12px 16px;
`;