import axios from 'axios';
//base URL
//start from Aug 1st, that should be enough time
const url = 'http://newsapi.org/v2/everything?apiKey=7732929add5145eeb58a4b07f6198b93&from=2020-08-01&sortBy=popularity';
const searchURL=(keyword)=>url.concat(`&q=${keyword}`);

export const fetchSearchedNews=async(keyword)=>{
    let newSearchURL=searchURL('SpaceX');
    if(keyword) newSearchURL=searchURL(keyword);
    try{
        //props must name data to work(even props doesnt work). possibly a await or get() thing
        const{data}=await axios.get(newSearchURL);
        const newsData=data;
        
        return newsData;
    }catch(e){
        console.log(e);
    }
}
