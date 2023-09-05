
export default function displayEpisodesData(displayData) {
    const episodesSection = document.getElementById('shows-container');
  
    let displaymenu= displayData.map((individualEpisode,index) => {
        console.log(individualEpisode)
        
        return `  <div class="showall">
        <div class="img-container">
        <img src=${individualEpisode.image.medium} alt=${individualEpisode.name} class="img">
        <div class="info">
            <h5>${individualEpisode.name}</h5>
        <span class="likes-counter"><i class="fa-regular fa-heart"></i></span>
        </div>
        <button class="comment-btn">Comment</button>
    </div>
    </div>`
      
  
    
  
      
    });
    displaymenu=displaymenu.join("")
    episodesSection.innerHTML= displaymenu
    
  }
  