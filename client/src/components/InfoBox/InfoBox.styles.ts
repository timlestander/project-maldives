import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  margin-right: 12px;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.2);

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Title = styled.h3`
  margin: 16px;
`;

export const Value = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-left: 16px;
  text-align: center;
`;