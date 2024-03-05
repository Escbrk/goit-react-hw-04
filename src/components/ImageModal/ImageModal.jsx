import css from "./ImageModal.module.css";

const ImageModal = ({ onModalClose, img }) => {
  return (
    <>
      <img className={css.modalImg} src={img} alt="" onClick={onModalClose} />
    </>
  );
};
export default ImageModal;
