// Array of song objects. 
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
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
    
            let songTitleEl = document.createElement('span');
            songTitleEl.setAttribute('class', 'song-title');
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


