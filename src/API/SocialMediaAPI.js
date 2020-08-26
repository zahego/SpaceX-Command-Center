import axios from 'axios';
//base URL
const url='https://www.reddit.com/r/spacex.json?limit=1';

export const fetchSearchedSocialMedia = async (keyword) => {
    let newSearchURL = url;
    /*if (keyword) newSearchURL = searchURL(keyword);*/
    try {
        const { data } = await axios.get(newSearchURL);
        const newsData = data;
        return newsData;
    } catch (e) {
        console.log(e);
    }
}
