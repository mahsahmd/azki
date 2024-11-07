import { Button } from "./Button";

export type ModalProperties = {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
};

export const Modal = (properties: ModalProperties) => {
  const { open, children, title, onClose } = properties;
  return (
    <div
      aria-modal
      className={`fixed left-0 top-0 z-50 h-full w-screen items-end bg-gray-800/50 transition-all duration-200 ease-in-out lg:flex lg:items-center lg:justify-center ${
        open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      role="dialog"
    >
      <div
        className={`bg-white absolute bottom-0 w-screen overflow-hidden p-6 outline-none transition-all duration-200 ease-in-out lg:static lg:bottom-auto lg:w-auto lg:rounded-2xl 
         h-auto rounded-t-2xl
        `}
      >
        {title && (
          <div className="flex h-6 w-full flex-row items-center mb-8">
            <h6 className="text-xl text-gray-900">{title}</h6>
          </div>
        )}
        <div className="flex flex-col gap-4">
          {children}
          <Button title="بستن" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
