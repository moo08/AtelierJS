/*
// Create Object here
// =========================================

let episode = {
    title: 'French Kiss',
    duration: 24,
    hasBeenWatched: false, 
}

// Create variables here
// =====================================

let episodeTitle = "episode.title";
let episodeDuration = "episode.duration";
let episodeHasBeenWatched = "episode.hasBeenWatched";

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`
*/

// Create a class here
// =====================================
class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let firstEpisode = new Episode('French Kiss', 24, true);
  let secondEpisode = new Episode('Mbaye', 24, false);
  let thirdEpisode = new Episode('Jean Fall', 24, false);
  
  // =====================================
  
  document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
  Duration: ${firstEpisode.duration} min
  ${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
  
  document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
  Duration: ${secondEpisode.duration} min
  ${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
  
  document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
  Duration: ${thirdEpisode.duration} min
  ${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;