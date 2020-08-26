import axios from 'axios';
//base URL
//start from Aug 1st, that should be enough time
const appID= '9202d034';
const appKey='e02dbe21eeb7e32b6f26223562f786f9';
const url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appID}&app_key=${appKey}`;
const searchURL=(keyword)=>url.concat(`&&results_per_page=20&what=${keyword}&content-type=application/json`);

export const fetchSearchedJob=async(keyword)=>{
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