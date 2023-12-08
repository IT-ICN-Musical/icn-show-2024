import React, { Dispatch, SetStateAction } from "react";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all opacity-0 scale-0")
      }
      style={{ left: 0, top: 0 }}
    >
      <section
        className={
          "fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg overflow-hidden" +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg flex flex-col h-full rounded-lg overflow-hidden">
          {children}
        </article>
      </section>
      <section
        className="w-screen h-screen cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Modal;
