import axios from 'axios';

const getProductsList = async () => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
            from: '0',
            size: '20',
            tags: 'under_30_minutes'
        },
        headers: {
            'X-RapidAPI-Key': 'd339581aabmsh48064c382451c48p1fed66jsn39d405067ff0',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    return await axios.request(options);
};

export { getProductsList };
