import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import "../styles/PopupModal.css";

const PopUpModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The button that opens the modal */}
      <button onClick={() => setIsOpen(true)}>Open dialog</button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="my-dialog-root" // Not strictly used for styling in this example
      >
        {/* This div is your custom backdrop */}
        {isOpen && <div className="modal-backdrop" aria-hidden="true" />}

        {/* Container to center the dialog */}
        <div className="modal-container">
          <DialogPanel className="modal-dialog">
            <DialogTitle as="h2" className="modal-title">
              Deactivate account
            </DialogTitle>

            {/* The description that sets aria-describedby on the dialog */}
            <Description className="modal-description">
              This will permanently deactivate your account
            </Description>

            <p className="modal-text">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <div className="modal-button-group">
              <button
                className="modal-button modal-button-cancel"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="modal-button modal-button-danger"
                onClick={() => setIsOpen(false)}
              >
                Deactivate
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default PopUpModal;
