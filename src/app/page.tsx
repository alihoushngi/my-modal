"use client";

import Modal from "@/components/Base/Modal/Modal";
import Navbar from "@/components/Base/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  openContentModal,
  closeContentModal,
} from "@/redux/slices/modalSlices";

export default function Home() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);

  const openModalHandler = () => {
    dispatch(openContentModal());
  };

  const closeModalHandler = () => {
    dispatch(closeContentModal());
  };

  return (
    <main>
      <button onClick={openModalHandler}>+</button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModalHandler}>
          content type
          {/* button signal*/}
          {/* button */}
          {/* button */}
        </Modal>
      )}
      <Modal isOpen={isOpen} onClose={closeModalHandler}>
        {/* when signal is open we have to close the main modal */}
        signal
      </Modal>
      <Navbar />
    </main>
  );
}
