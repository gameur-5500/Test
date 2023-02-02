// animes proprities section

class animes {
    constructor(title, seasons, episodes, watched){
        this.title = title;
        this.seasons = seasons;
        this.episodes = episodes;
        this.watched = watched;
    }
}

let OnePiece = new animes ('One Piece', 21, 1049, true);
let DemonSlayer = new animes ('Demon Slayer', 2, 40, true);
let Naruto = new animes ('Naruto', 22, 209, true);
let NarutoShippuden = new animes ('Naruto Shippuden', 21, 246, false);
let Bleach = new animes ('Bleach', 24, 3, false);

let animesOrder = [    
    OnePiece,
    DemonSlayer,
    Naruto,
    NarutoShippuden,
    Bleach,
];

// Show animes section

function showAnimes() {
    let order = 0;
    let maxAnimes = animesOrder.length;
    if (order < maxAnimes) {
       let anime = animesOrder[order];
       order++
       let title = anime.title;
       let seasons = anime.seasons;
       let episodes = anime.episodes;
       let watched = anime.watched;
    }
    else{
        let anime = animesOrder[order];
        order = 0;
        let title = anime.title;
        let seasons = anime.seasons;
        let episodes = anime.episodes;
        let watched = anime.watched;
    }
}

// What you watched

let WatchedParagraphText = "";
let moreThanTwo = +2 ;

function WatchedParagraph() {
    let watched = OnePiece.watched && Naruto.watched && NarutoShippuden.watched && Bleach.watched && DemonSlayer.watched;
    if (watched) {
       WatchedParagraphText = "You watched the animes :D";
    }
    else{    
        let order = 0;
        let AnimesNotWatched = "";
        let numberOfAnimes = 3;
        if (!animesOrder[order].watched){
          if (order <= 4){
          switch (numberOfAnimes){
            case 0:
              AnimesNotWatched = animesOrder[order].title;
              numberOfAnimes++;
              order++;
            break;
            case 1:
              AnimesNotWatched += "and " + animesOrder[order].title;
              numberOfAnimes++;
              order++;
            break;
            case moreThanTwo :
             AnimesNotWatched += animesOrder[order].title;
             numberOfAnimes++;
             order++;
            break;
         }
        }
       }   
       else {
         order = 0;
       }
         WatchedParagraphText = "You didn't watch " + AnimesNotWatched;      
    }
  
  return WatchedParagraphText;
  
}

console.log(WatchedParagraph());