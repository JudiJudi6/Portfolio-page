import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

type ModalContextType = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
};

type ModalProps = {
  children: React.ReactNode;
};

type OpenProps = {
  children: React.ReactNode;
  opens: string;
};

type WindowProps = {
  children: React.ReactNode;
  name: string;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => {
    setOpenName("");
  };
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }: OpenProps) {
  const { open } = useContext(ModalContext)!;
  return cloneElement(children as React.ReactElement, {
    onClick: () => open(opens),
  });
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext)!;
  const header = document.querySelector("#header")!;

  console.log(header);
  if (name !== openName) return null;

  return createPortal(
    <div className="absolute top-0 left-0 w-full h-full z-50 ">
      <div className="h-full w-full bg-bg opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2  w-full h-full max-w-7xl md800:p-12 z-[51]">
        {cloneElement(children as React.ReactElement, {
          onCloseModal: close,
        })}
      </div>
    </div>,
    header
  );
}

Modal.Open = Open;
Modal.Window = Window;
