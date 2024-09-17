// Array of song objects. 
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop", url: "https://youtu.be/NrI-UBIB8Jk?si=qpuLktIaH-czeS_u"},
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock",url: "https://youtu.be/RPUAldgS7Sg?si=kgnM_8fiNeSdHn_h" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop", url: "https://youtu.be/y2bVIBwpCTA?si=76hRpwSlHH7FNtdi" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock", url: "https://youtu.be/W2msh0jut2Y?si=cmRmJ8t0HzkjEH49" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock", url: "https://youtu.be/K2ws6vMFF3c?si=1caN412r1O7YcLn8" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop", url: "https://youtu.be/TazHNpt6OTo?si=AZYqr1NA4I7sY-bm" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B", url: "https://youtu.be/dguz0IsCuKU?si=-AYnCQuIgJ8eG8Se" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B", url: "https://youtu.be/ABfQuZqq8wg?si=8bYfaiSCnPNm_Nl_" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock", url: "https://youtu.be/bc0KhhjJP98?si=ZW_vDGd5MK-7OU74" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop", url: "https://youtu.be/NrI-UBIB8Jk?si=qpuLktIaH-czeS_u" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock", url: "https://youtu.be/DyMMEmwFQUE?si=QHpv-dpy18wFqPQe" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax":"R&B",
    "Rocket":"Rock",
    "Groot":"Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    let playlist = new Map();

    for(currentGuardian in guardians){
        let extractSongs = songs.filter(song => {
            return song.genre === guardians[currentGuardian]
        });

        playlist.set(currentGuardian,extractSongs)
    }
    displayPlaylist(playlist);
}

function displayPlaylist(playlist){
    let playlistsEl = document.getElementById('playlists');

    for(let [key,value] of playlist){
        let playlistEl = document.createElement('div');

        playlistEl.setAttribute('class' , 'playlist');
        playlistsEl.appendChild(playlistEl);
    
        let guardianPlaylist = document.createElement('h1');
        guardianPlaylist.innerHTML = key;
        playlistEl.appendChild(guardianPlaylist);

        value.forEach(x => {
            let songEl = document.createElement('p');
    
            let songTitleEl = document.createElement('a');
            songTitleEl.setAttribute('class', 'song-title');
            songTitleEl.setAttribute('href', x.url);
            songTitleEl.setAttribute('target','_blank');
            let songArtistEl = document.createElement('span');
            songTitleEl.textContent = x.title;
            songArtistEl.textContent = ` by ${x.artist}`;

            songEl.appendChild(songTitleEl);
            songEl.appendChild(songArtistEl);

            playlistEl.appendChild(songEl);

        });

    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



