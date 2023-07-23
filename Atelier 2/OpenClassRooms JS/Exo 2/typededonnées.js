// Create variables here
// =========================================

const episodeTitle = "French Kiss";
const episodeDuration = 24;
let hasBeenWatched = false;

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`