import styled from 'styled-components';

export const HeaderText = styled.h1`
  display: block;
  text-transform: uppercase;
  text-align: center;
  margin: 96px 0 96px 0;
`

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
`;

export const ChartsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ChartContainer = styled.div`
  border-radius: 12px;
  position: relative;
  flex: 0 1 400px;
  height: 400px;
`;

export const CenteredLabel = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
