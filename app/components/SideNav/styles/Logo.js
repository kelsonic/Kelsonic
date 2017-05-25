import styled from 'styled-components';

const Logo = styled.div`
  align-items: center;
  background: #010101;
  border-radius: 100%;
  color: #000000;
  display: flex;
  height: calc(${(window.innerWidth * 0.2)}px - 4rem);
  justify-content: center;
  margin-top: 20%;
  text-align: center;
  width: calc(${window.innerWidth * 0.2}px - 4rem);
`;

export default Logo;
