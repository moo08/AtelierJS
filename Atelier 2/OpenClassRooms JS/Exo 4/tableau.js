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
  
  // Create your array here
  // ====================================
  
  let episodes = [];
  episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
  episodes.pop()

  let numberOfEpisodes = episodes.length;
  
  // ====================================
  
  const body = document.querySelector('body');
  
  for(let i = 0; i < 12; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
    newTitle.innerText = 'The Story of Tau';
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `${episodes[i].title}
  ${episodes[i].duration} minutes
  ${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
  }