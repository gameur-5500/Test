// class

class animes {
    constructor(title, seasons, episodes, watched){
        this.title = title;
        this.seasons = seasons;
        this.episodes = episodes;
        this.watched = watched;
    }
}

let OnePiece = new animes ('One Piece', 21, 1043, true);
let DemonSlayer = new animes ('Demon Slayer', 2, 40, true);
let Naruto = new animes ('Naruto', 22, 209, true);
let NarutoShippuden = new animes ('Naruto Shippuden', 21, 246, false);
let Bleach = new animes ('Bleach', 24, 3, false);

// table

let animesOrder = [    
    OnePiece,
    DemonSlayer,
    Naruto,
    NarutoShippuden,
    Bleach,
];

// mix

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