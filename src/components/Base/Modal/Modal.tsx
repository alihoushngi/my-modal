// in next 13 when you use somthing work on csr , you have to type "use client"
"use client";

import React, { useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";
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

const Modal = ({
  children,
  isOpen,
  animation,
  //   onClose,
  closeOnBackDropClick,
}: IModal) => {
  const modalRef = useRef(null);
  //   useOnClickOutside(modalRef, () => {
  //     if (!closeOnBackDropClick) {
  //       return;
  //     }
  //     onClose();
  //   });

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={
          animation === "fade" ? "core-modal-fade" : "core-modal-slide-down"
        }
        unmountOnExit
      >
        <StyledModalOverLay>
          <StyledModal ref={modalRef}>
            <StyledModalHeader>
              <StyledModalHeaderWrapper>
                {/* <StyledCloseButton className="close-button" onClick={onClose}>
                  &times;
                </StyledCloseButton> */}
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
