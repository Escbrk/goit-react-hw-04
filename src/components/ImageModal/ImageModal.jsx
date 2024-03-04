import ReactModal from "react-modal";

export default function ImageModal({ onOpen, onClose }) {
  return (
    <div>
      <button onClick={onOpen}></button>
      <ReactModal>
        <button onClick={onClose}></button>
      </ReactModal>
    </div>
  );
}
