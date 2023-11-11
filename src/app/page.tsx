import Modal from "@/components/Base/Modal/Modal";
import Navbar from "@/components/Base/Navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Home() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
