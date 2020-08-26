
import axios from 'axios';
//base URL
const apiKey="594da0f0115441f38dc05153202608";
const url=`http://api.weatherapi.com/v1/current.json?key=${apiKey}`;
const searchURL = (area) => url.concat(`&q=${area}`);

export const fetchSearchedWeather = async (area) => {
    let newSearchURL = url;
    if (area) newSearchURL = searchURL(area);
    try {
        const { data } = await axios.get(newSearchURL);
        const newsData = data;
        return newsData;
    } catch (e) {
        console.log(e);
    }
}
