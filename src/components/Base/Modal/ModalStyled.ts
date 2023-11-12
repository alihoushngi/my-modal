import styled from "styled-components";

export const StyledModalOverLay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledModal = styled.div`
  background-color: #f8f7fe;
  min-width: 400px;
  max-width: 630px;
  min-height: 200px;
  box-shadow: rgba(99, 99, 99, 0.2), 0px 2px 8px 0px;
  border-radius: 15px;
  padding: 20px;
`;

export const StyledSlideDown = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

export const StyledModalHeader = styled.div`
  text-align: center;
  background-color: #f8f7fe;
  color: #505b70;
  padding: 1rem;
  font-size: 16px;
  font-weight: 600;
  border-radius: inherit;
  position: relative;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 15px;
  color: gray;
  &:hover {
    border-color: gray;
  }
`;
export const StyledModalHeaderWrapper = styled.div`
  /* display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center; */
`;

export const StyledModalContent = styled.div`
  color: #000;
`;
