import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search",
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "v1",
    Authorization: "Client-ID Cm_whFcI0aWjAKtIy6nEUeY3kTPfjkqGiHKF3_4_ufk",
  },
});

const fetchGallery = async (query, page, perPage) => {
  const {
    data: { results, total_pages },
  } = await instance.get("/photos", {
    params: {
      query,
      order_by: "latest",
      page,
      per_page: perPage,
    },
  });

  const res = total_pages !== 0 && total_pages !== page
  console.log(res)

  return { results, total_pages, res };
};

export default fetchGallery;
