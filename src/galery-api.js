import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search",
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "v1",
    Authorization: "Client-ID Cm_whFcI0aWjAKtIy6nEUeY3kTPfjkqGiHKF3_4_ufk",
  },
});

const fetchGallery = async (query, page) => {
  const response = await instance.get("/photos", {
    params: {
      query,
      order_by: "latest",
      page,
      per_page: 30,
    },
  });

  const {
    data: { total_pages, results },
    // data,
  } = response;


  return { total_pages, results };
};

export default fetchGallery;
