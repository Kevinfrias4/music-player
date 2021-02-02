import React from 'react';
import Ripples from 'react-ripples';

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs, id }) => {

    const songSelectHandler = async () => {
        await setCurrentSong(song);
        //Add Active State
        const newSongs = songs.map((song) => {
            if(song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        //Check if the song is playing
        if(isPlaying) audioRef.current.play();
    }

    return(
        <Ripples color="#20bde4" during={2200}>
        <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
        </Ripples>
    );
}

export default LibrarySong;