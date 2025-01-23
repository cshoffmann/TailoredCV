import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { FaRegCopy } from "react-icons/fa";
import "../styles/PopupModal.css";

const PopUpModal = ({ tailoredCoverLetter }) => {
  let [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
    if (tailoredCoverLetter) {
      navigator.clipboard.writeText(tailoredCoverLetter);
      console.log("Copied to clipboard:", tailoredCoverLetter);
    } else {
      console.error("No text to copy");
    }
  };

  return (
    <>
      {/* The button that opens the modal */}
      <button onClick={() => setIsOpen(true)}>Open dialog</button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="my-dialog-root"
      >
        {/* Custom backdrop */}
        {isOpen && <div className="modal-backdrop" aria-hidden="true" />}

        <div className="modal-container">
          <DialogPanel className="modal-dialog">
            {/* Copy button */}
            <div className="copy-button-container">
              <button className="copy-button" onClick={handleCopy} title="Copy">
                <FaRegCopy />
              </button>
            </div>

            {/* Modal content */}
            <DialogTitle as="h2" className="modal-title">
              Deactivate account
            </DialogTitle>
            <Description className="modal-description">
              This will permanently deactivate your account
            </Description>
            <p className="modal-text">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
            <div className="modal-button-group">
              <button
                className="modal-button modal-button-danger"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default PopUpModal;
