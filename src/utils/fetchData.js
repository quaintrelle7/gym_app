/* Utility functions we'll be reusing across the app
Import from rapidAPI, ExerciseDB
grabs our key in .env to process the data from
the host at RapidAPI


Had to Close react and restart to activate
the key  */
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

/* setting up fetchData function to accept url 
and options parameters. */
export const fetchData= async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};
