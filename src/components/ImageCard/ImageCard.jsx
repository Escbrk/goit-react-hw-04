import css from "./ImageCard.module.css";

const ImageCard = ({
  description,
  url: { small, regular },
  onModalOpen,
  onTarget,
}) => {
  const target = (e) => {
    onTarget(regular);
    onModalOpen();
  };
  return (
    <>
      <img src={small} alt={description} onClick={target} />
    </>
  );
};

export default ImageCard;
