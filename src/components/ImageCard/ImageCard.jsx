import css from './ImageCard.module.css'

export default function ImageCard({
  description,
  url: { small },
  onModalOpen,
}) {
  return (
    <div>
      <img src={small} alt={description} onClick={onModalOpen} />
    </div>
  );
}
