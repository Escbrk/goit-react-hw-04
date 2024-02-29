import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "v1",
    Authorization: "Client-ID Cm_whFcI0aWjAKtIy6nEUeY3kTPfjkqGiHKF3_4_ufk",
  },
});

const fetchGallery = async (query, page = 1) => {
  const response = await instance.get("/photos", {
    params: {
      query,
      order_by: "latest",
      page,
    },
  });
  console.log(response.data);

  return response.data;
};

export default fetchGallery;
