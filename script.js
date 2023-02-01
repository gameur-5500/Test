// class

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

// table

let animesOrder = [    
    OnePiece,
    DemonSlayer,
    Naruto,
    NarutoShippuden,
    Bleach,
];


// What you watched

let ParagraphText = "";

function WatchedParagraph() {
    let watched = OnePiece.watched && Naruto.watched && NarutoShippuden.watched && Bleach.watched && DemonSlayer.watched;
    if (watched) {
        let noneWatched = [ 
            !OnePiece.watched, 
            !DemonSlayer.watched,
            !Naruto.watched, 
            !NarutoShippuden.watched, 
            !Bleach.watched, 
        ];
            
        let order = 0;
        let AnimesNotWatched = "";
        let numberOfAnimes = 0;
        if (order <= 5){
            if (noneWatched[order]){
                order++;
                if (numberOfAnimes = 1) {
                    AnimesNotWatched =+ 'and' + animesOrder[order].title;
                    numberOfAnimes++;
                }
                else{
                    AnimesNotWatched =+ animesOrder[order].title;
                    numberOfAnimes++;
                }
             }
             else {
                 order++
             }
        }
        else{
            order = 0;
        }
        let WatchedParagraphText = "You didn't watch " + AnimesNotWatched;
    }
    else{
        WatchedParagraphText = "You watched the animes :D";
    }
}

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

