export interface IModal {
  children: React.ReactNode;
  animation?: "fade" | "slide-down";
  isOpen: boolean;
  closeOnBackDropClick?: boolean;
  //   onClose: () => void;
}
