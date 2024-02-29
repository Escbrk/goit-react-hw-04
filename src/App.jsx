import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchGallery from "./galery-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (query === "") return;

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        // setImages([]);
        const img = await fetchGallery(query, page);
        setImages((prevImg) => {
          return [...prevImg, ...img];
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <>
          <ImageGallery items={images} />
          {!isLoading && <LoadMoreBtn onLoad={handleLoadMore} />}
        </>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default App;
