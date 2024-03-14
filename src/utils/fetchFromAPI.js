import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
        maxResults: '100'
    },
    headers: {
        'X-RapidAPI-Key':'2980d7bf30msh564127b7e67add3p1a1556jsnab6c153e86d6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) => {
    const {data} =await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}

