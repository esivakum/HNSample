import ApiService from './Api';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
const client = new ApiService({baseURL: BASE_URL});
const JSON_QUERY = '.json?print=pretty';

const PAGE_LIMIT = 10;
const hackersNewsApi = {};


const getPageSlice = (limit, page=0)=>({begin: page*limit, end: (page+1)*limit});
const getPageValue = ({begin, end, items}) => items.slice(begin,end);

hackersNewsApi.getTopStoriesIds = () => client.get(`topstories${JSON_QUERY}`);
hackersNewsApi.getStory = (id) => client.get(`/item/${id}${JSON_QUERY}`);
hackersNewsApi.getStoriesByPage = (ids, page) =>{
    const {begin, end} = getPageSlice(PAGE_LIMIT, page);
    const activeIds = getPageValue({begin, end, items: ids});
    const storyPromises = activeIds.map(id=>hackersNewsApi.get(id));
    return  Promise.all(storyPromises);
};

export default hackersNewsApi;