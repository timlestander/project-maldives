import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .row {
    display: flex;

    input {
      flex: 1;
      padding: 8px 12px;
      outline: none;
      min-width: 100px;
      border: 1px solid gray;

      &.valid {
        background: #cefbc8;
      }

      &.invalid {
        background: #ffe7e7;
      }
    }

    .addBtn {
      display: flex;
      flex: 0 0 31px;
      height: 31px;
      background: gold;
      justify-content: center;
      align-items: center;
      border: 1px solid #adadad;

      &.disabled {
        background: #e0e0e0;
      }
    }
  }

  .dropdown {
    background: #fff;
    z-index: 1000;
    position: absolute;
    top: 52px;
    width: 250px;
    border-radius: 0 0 6px 6px;
    border: 1px solid gray;
    border-top: 0;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);

    .item {
      padding: 6px;
      cursor: pointer;

      &:hover {
        background: #eeeeee;
      }
    }
  }
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #333;
`;

export const SelectField = styled.select`
  padding: 8px 12px;
`;