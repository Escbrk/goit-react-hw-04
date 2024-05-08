import ImageGalleryProps from "../../types/ImageGalleryProps";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.module.css";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  onModalOpen,
  onTarget,
}) => {
  console.log(items);
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
