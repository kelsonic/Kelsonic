import styled from 'styled-components';

const viewportWidth = window.innerWidth;
const wrapperWidth = viewportWidth * 0.2;

const Wrapper = styled.div`
  background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(44,44,44,1) 100%);
  border-left: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  height: 100%;
  left: ${(viewportWidth / 2) - (wrapperWidth / 2)}px;
  padding: 2rem;
  position: absolute;
  top: 0;
  width: ${wrapperWidth}px;
`;

export default Wrapper;
