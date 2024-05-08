interface ImageCardProps {
  alt_description: string;
  url: { small: string; regular: string };
  onModalOpen: () => void;
  onTarget: (params: { img: string; alt_description: string }) => void;
}

export default ImageCardProps