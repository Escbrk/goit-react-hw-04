import "./ImageCard.module.css";

const ImageCard = ({
  alt_description,
  url: { small, regular },
  onModalOpen,
  onTarget,
}) => {
  const target = () => {
    onTarget({
      img: regular,
      alt_description,
    });
    onModalOpen();
  };
  return (
    <>
      <img src={small} alt={alt_description} onClick={target} />
    </>
  );
};

export default ImageCard;
