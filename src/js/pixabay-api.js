import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com';

export const photoRequest = (searchedQuery, currentPage) => {
    return axios.get('/api/', {
        params: {
            key: '48247708-2116833e6be306042b2a4a912',
            q: searchedQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            maxWidth: 500,
            page: currentPage,
            per_page: 15,
        }
    });
};