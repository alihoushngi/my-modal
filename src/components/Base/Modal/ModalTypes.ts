export interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  closeOnBackDropClick?: boolean;
  onClose: () => void;
}
