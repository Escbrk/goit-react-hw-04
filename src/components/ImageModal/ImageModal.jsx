import css from "./ImageModal.module.css";

const ImageModal = ({ onModalClose, img }) => {
  return (
    <>
      <img
        className={css.modalImg}
        src={img.img}
        alt={img.alt_description}
        onClick={onModalClose}
      />
      <p>{img.alt_description}</p>
    </>
  );
};
export default ImageModal;
