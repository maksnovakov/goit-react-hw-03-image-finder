import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: '30051672-08dafe1edcff0340557e21f5f',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};

export const fetchImages = async (query,page) => {
    const { data } = await axios.get(`?q=${query}&page=${page}`);
    return data;
}