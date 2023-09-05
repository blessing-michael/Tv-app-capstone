import './style.css';
import fetchEpisodes, { fetchData } from './assets/Apidata';
import displayEpisodesData from './assets/displayShows';



const main = async () => {
  const displayData = await fetchEpisodes();
 displayEpisodesData(displayData)
 

 

 
 
};

main();



