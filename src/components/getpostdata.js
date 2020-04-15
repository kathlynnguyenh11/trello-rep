import axios from 'axios';

const getPostDate = axios.create({
    baseURL: "http://my-json-server.typicode.com/bnissen24/project2DB/posts"
});

const getCardInfo = async () => {
    const response = await getPostDate.get('/')
    return response;
};

export default {getPostDate, getCardInfo}

