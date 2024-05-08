import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search",
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "v1",
    Authorization: "Client-ID Cm_whFcI0aWjAKtIy6nEUeY3kTPfjkqGiHKF3_4_ufk",
  },
});

interface Images {
  id: number;
  alt_description: string;
  urls: { small: string; regular: string };
}

interface Data {
  results: Images[];
  total_pages: number;
}

const fetchGallery = async (query: string, page: number): Promise<Data> => {
  const {
    data: { results, total_pages },
  } = await instance.get("/photos", {
    params: {
      query,
      order_by: "latest",
      page,
      per_page: 15,
    },
  });

  return { results, total_pages };
};

export default fetchGallery;
