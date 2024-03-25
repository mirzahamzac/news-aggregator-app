import axios from 'axios';

//NewsAPI.org
const NEWS_API_ORG_API_KEY = process.env.REACT_APP_NEWS_API_KEY_NEWS_API_ORG; // Replace this with your actual API key
const NEWS_API_ORG_BASE_URL = process.env.REACT_APP_NEWS_API_ORG_BASE_URL;

//NY Times
const NY_TIMES_API_KEY = process.env.REACT_APP_NEWS_API_KEY_NY_TIMES; // Replace this with your actual API key
const NY_TIMES_BASE_URL = process.env.REACT_APP_NY_TIMES_BASE_URL;


//THE GUARDIAN
const THE_GUARDIAN_API_KEY = process.env.REACT_APP_NEWS_API_KEY_THE_GUARDIAN; // Replace this with your actual API key
const THE_GUARDIAN_BASE_URL = process.env.REACT_APP_THE_GUARDIAN_BASE_URL;


const fetchNews = async (searchTerm, filters) => {
debugger
  if(filters && filters.filterType === "news_api_org"){

    try {
      const response = await axios.get(`${NEWS_API_ORG_BASE_URL}/everything`, {
        params: {
          q: searchTerm,
          apiKey: NEWS_API_ORG_API_KEY,
          category: filters.category,
          sources: filters.source,
         
          // Add more filters as needed
        },
      });
  
  
  
      debugger
      return response.data.articles; // Assuming API returns an array of articles
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }else if(filters && filters.filterType === "ny_times"){

    try {
      const response = await axios.get(`${NY_TIMES_BASE_URL}/articlesearch.json?`, {
        params: {
          q: searchTerm,
          "api-key": NY_TIMES_API_KEY,
          "fq": filters.category,
          sources: filters.source,
          facet:true,
         
          // Add more filters as needed
        },
      });
  
  
  
      debugger
      return response.data.response.docs; // Assuming API returns an array of articles
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }



  }else{


    try {
      const response = await axios.get(
       THE_GUARDIAN_BASE_URL,
        {
          params: {
            q: searchTerm, // Example query
            "api-key": THE_GUARDIAN_API_KEY,
          },
        }
      );
      debugger
      return response.data.response.results;
    } catch (error) {
      console.error('Error fetching news:', error);
    }



  }
 
};

export default fetchNews;