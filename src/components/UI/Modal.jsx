import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        if(open) {
            modal.showModal();
        }

        return () => modal.close();  // cleanup function
    }, [open]);

  return createPortal(
    <dialog ref={dialog} className="bg-orange-10 rounded-md  p-6 overflow-hidden  w-96" onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}
