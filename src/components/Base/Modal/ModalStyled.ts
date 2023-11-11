import styled from "styled-components";

export const StyledModalOverLay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledModal = styled.div`
  background-color: wheat;
  min-width: 200px;
  min-height: 200px;
  box-shadow: rgba(99, 99, 99, 0.2), 0px 2px 8px 0px;
  border-radius: 5px;
`;

export const StyledSlideDown = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

export const StyledModalHeader = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  font-size: 16px;
  border-radius: inherit;
`;

export const StyledCloseButton = styled.button`
  &:hover {
    border-color: gray;
  }
`;
export const StyledModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`;

export const StyledModalContent = styled.div`
  color: #000;
`;
