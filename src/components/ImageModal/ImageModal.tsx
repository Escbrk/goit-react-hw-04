import ImageModalProps from "../../types/ImageModalProps";
import css from "./ImageModal.module.css";


const ImageModal: React.FC<ImageModalProps> = ({ onModalClose, img }) => {
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
