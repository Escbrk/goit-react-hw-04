import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onModalOpen, onTarget }) => {
  return (
    <ul>
      {items.map(({ id, alt_description, urls }) => {
        return (
          <li key={id}>
            <ImageCard
              url={urls}
              alt_description={alt_description}
              onModalOpen={onModalOpen}
              onTarget={onTarget}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
