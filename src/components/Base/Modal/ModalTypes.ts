export interface IModal {
  children: React.ReactNode;
  headerChildren?: string;
  isOpen: boolean;
  header?: boolean;
  closeOnBackDropClick?: boolean;
  onClose: () => void;
}
