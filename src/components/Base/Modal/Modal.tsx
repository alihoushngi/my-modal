// in next 13 when you use somthing work on csr , you have to type "use client"
"use client";

import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { IModal } from "./ModalTypes";

// import styles from moda; styles file base on styled-components
import {
  StyledCloseButton,
  StyledModal,
  StyledModalContent,
  StyledModalHeader,
  StyledModalHeaderWrapper,
  StyledModalOverLay,
} from "./ModalStyled";
import { ReactComponent } from "@/types/base";

const Modal: ReactComponent<IModal> = (props) => {
  const { children, header, headerChildren, isOpen, onClose } = props;

  return (
    <>
      <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
        <StyledModalOverLay>
          <StyledModal>
            <StyledModalHeader>
              {header && <div>{headerChildren}</div>}
              <StyledModalHeaderWrapper>
                <StyledCloseButton className="close-button" onClick={onClose}>
                  &times;
                </StyledCloseButton>
              </StyledModalHeaderWrapper>
            </StyledModalHeader>
            <StyledModalContent>{children}</StyledModalContent>
          </StyledModal>
        </StyledModalOverLay>
      </CSSTransition>
    </>
  );
};

export default Modal;
