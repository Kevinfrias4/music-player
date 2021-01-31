import React from 'react';

const librarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying }) => {

    const songSelectHandler = () => {
        setCurrentSong(song);
        audioRef.current.play();
        //Check if the song is playing
        if(isPlaying) {
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }

    return(
        <div onClick={songSelectHandler} className="library-song">
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default librarySong;