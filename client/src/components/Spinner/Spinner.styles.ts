import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(-30deg);
  }
`;

export const Wrapper = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: rgba(255,255,255,0.9);
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
`;

export const Text = styled.h1`
  color: #333;
  text-align: center;
`;

export const Image = styled.img`
  display: inline-block;
  animation: ${rotate} 1.5s linear infinite;
`;