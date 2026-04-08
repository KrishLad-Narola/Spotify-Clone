import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import { songsData } from "../assets/assets";


export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBar = useRef();
    const seekBg = useRef();

    const [track , setTrack] = useState(songsData[0]);
    const [songStatues , setSongStatues] = useState(false);
    const [time ,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    });

    const play = () => {
        audioRef.current.play();
        setSongStatues(true);
    }

    
    const pause = () => {
        audioRef.current.pause();
        setSongStatues(false);
    }

    const playWithId = async (id)=> {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatues(true);
    }

    const previous =  async () => {
        if(track.id >0){
            await setTrack(songsData[track.i-1]);
            await audioRef.current.play();
            setSongStatues(true);
        }
    }

     const next =  async () => {
        if(track.id < songsData.length-1){
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setSongStatues(true);
        }
    }

    useEffect(() => {
       setTimeout(() => {
    
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";

          audioRef.current.ontimeupdate = () => {
              setTime(
                {
        currentTime:{
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60)
        },
        totalTime:{
             second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60)
        }
    }
              )
          }  
       }, 1000);
    
      
    }, [audioRef]);
          
    const contextValue = {
         audioRef,
         seekBar,
         seekBg,
         track,setTrack,
         songStatues,setSongStatues,
         time,setTime,
         play,pause,
         playWithId,
         previous,next
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;