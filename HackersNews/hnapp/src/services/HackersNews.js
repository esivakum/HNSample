import ApiService from './Api';

const BASE_URL = 'http://hn.algolia.com/api/v1/';

const client = new ApiService({baseURL: BASE_URL});
const JSON_QUERY_Pages = 'search?page=';
const JSON_QUERY_Commennts = 'items/'

const hackersNewsApi = {};



hackersNewsApi.getTopStories = (page) => client.get(`${JSON_QUERY_Pages}${page}`);
hackersNewsApi.getItems = (id) => client.get(`${JSON_QUERY_Commennts}${id}`);


export default hackersNewsApi;