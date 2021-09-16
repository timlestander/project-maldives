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
    background: #ffffd5 !important;

    ${Base} {
      background: #f7f7c5;
      border-bottom: 1px solid #eaea96;
    }
  }

  &.odd {
    background: #f8f9fb;
  }

  &:hover {
    cursor: pointer;
    background: #fbfbe9;
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

  span {
    padding: 4px 12px;
    color: white;
    border-radius: 8px;
    font-size: 15px;

    &.result {
      &.win {
        background: #79c5a9;
      }

      &.loss {
        background: #eb403f;
      }

      &.push {
        background: #f6df82;
      }

      &.pending {
        background: #dadada;
        color: black;
      }
    }

    &.profit {
      &.win {
        color: #79c5a9;
      }

      &.loss {
        color: #eb403f;
      }

      &.push {
        color: #f6df82;
      }

      &.pending {
        color: black;
      }
    }
  }
`;