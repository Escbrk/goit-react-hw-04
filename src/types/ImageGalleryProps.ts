interface ImageGalleryProps {
  items: {
    id: number;
    alt_description: string;
    urls: { small: string; regular: string };
  }[];
  onModalOpen: () => void;
  onTarget: (params: { img: string; alt_description: string }) => void;
}

export default ImageGalleryProps