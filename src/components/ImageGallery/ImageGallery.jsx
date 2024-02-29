import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, description, urls }) => {
        return (
          <li key={id}>
              <ImageCard url={urls} description={description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
