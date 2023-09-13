export const hobbyOptions = {
	method: 'GET',
  headers: {
    'X-Api-Key': 'WrMIce1eJQIqrcfjAKX7nw==3HRtJQlDwoeHbSZv'
  },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '36813cdac7msh3c1c60db0acf90bp12aa9cjsn5beb4d9c69b5',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    }
  };


export const fetchData =  async(url, options) =>{
const response = await fetch(url, options);
const data = await response.json();
 return data;
}
