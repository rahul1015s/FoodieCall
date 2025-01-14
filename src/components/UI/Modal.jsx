import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open }) {
    const dialog = useRef();

    useEffect(() => {
        if(open) {
            dialog.current.showModal();
        }
    }, [open]);

  return createPortal(
    <dialog ref={dialog} className="bg-orange-10 rounded-md w-96 p-6 h-40 shadow-lg overflow-hidden  ">{children}</dialog>,
    document.getElementById("modal")
  );
}
