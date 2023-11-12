import { StaticImageData } from "next/image";

export interface IButtonTypes {
  children: React.ReactNode;
  buttonOnClickFunc: () => void;
  ImageButtonSrc: StaticImageData;
  ImageButtonAlt: string;
  customButtonClass?: string;
  isButtonDisable: boolean;
}
