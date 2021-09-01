import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  background: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 0 36px;
`;

export const Logo = styled.div`
  background: gold;
  border-radius: 12px;
  margin-right: 36px;
  padding: 8px 16px;
`;

export const Total = styled.div`
  color: gold;
  margin-left: auto;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-right: 24px;
    font-size: 18px;
    color: black;
    text-decoration: none;
  }
`;