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

export const DetailsTable = styled.table`
  padding: 12px;
  display: block;
`;

export const DetailsTableRow = styled.tr``;

export const DetailsTableHeaderItem = styled.th`
  text-align: left;
  padding: 8px 32px;
`

export const DetailsTableDataItem = styled.td`
  padding: 8px 32px;
`;

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