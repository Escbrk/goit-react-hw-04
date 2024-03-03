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
  const {
    data: { results },
    total_page,
  } = await instance.get("/photos", {
    params: {
      query,
      order_by: "latest",
      page,
      per_page: 30,
    },
  });

  const isLastPage = results.length === 0;
  console.log(isLastPage);

  return { results, total_page, isLastPage };
};

export default fetchGallery;
