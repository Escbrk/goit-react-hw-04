import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const instance = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
      "Content-Type": "application/json",
      "Accept-Version": "v1",
      Authorization: "Client-ID Cm_whFcI0aWjAKtIy6nEUeY3kTPfjkqGiHKF3_4_ufk",
    },
  });

  useEffect(() => {
    console.log(data)
  }, [data]);

  async function search(query) {
    return await instance.get(`/photos/?${query}`);
  }

  return (
    <div>
      <SearchBar onSubmit={search} setData={setData} />
      {data.length > 0 && <ImageGallery />}
    </div>
  );
};

export default App;
