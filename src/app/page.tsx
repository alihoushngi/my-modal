import Modal from "@/components/Base/Modal/Modal";
import Navbar from "@/components/Base/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Modal isOpen>Hi</Modal>
    </main>
  );
}
