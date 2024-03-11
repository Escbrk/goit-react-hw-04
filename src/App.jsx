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

Modal.setAppElement("#root");
//!===============================

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [perPage] = useState(15);
  const [modalData, setModalData] = useState({
    img: "",
    alt_description: "",
  });

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { total_pages, results } = await fetchGallery(
          query,
          page,
          perPage
        );

        setShowBtn(total_pages !== 0 && total_pages >= page && page !== 200);

        setImages((prevImg) => {
          return [...prevImg, ...results];
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [images]);

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
