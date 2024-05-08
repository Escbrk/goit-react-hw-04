import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchGallery from "./galery-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

//!===============================
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ModalData {
  img: string;
  alt_description: string;
}

interface Images {
  id: number;
  alt_description: string;
  urls: { small: string; regular: string };
}

Modal.setAppElement("#root");
//!===============================

const App = () => {
  const [images, setImages] = useState<Images[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>({
    img: "",
    alt_description: "",
  });
  useEffect((): void => {
    if (!query) return;

    const getData = async (): Promise<void> => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { total_pages, results } = await fetchGallery(query, page);

        setShowBtn(total_pages !== 0 && total_pages >= page && page !== 200);

        setImages((prevImg: Images[]) => {
          return [...prevImg, ...results];
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSearch = (newQuery: string): void => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleOpenModal = (): void => {
    setShowModal(true);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  //!==================================
  useEffect((): void => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [images]);
  //!==================================

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <>
          <ImageGallery
            items={images}
            onModalOpen={handleOpenModal}
            onTarget={setModalData}
          />
          {!isLoading && showBtn && <LoadMoreBtn onLoad={handleLoadMore} />}
        </>
      )}

      <Modal
        isOpen={showModal}
        style={customStyles}
        onRequestClose={handleCloseModal}
      >
        <ImageModal onModalClose={handleCloseModal} img={modalData} />
      </Modal>

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default App;
