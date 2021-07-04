import React from 'react'
import {useState,useEffect} from 'react';
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
const baseUrl='https://image.tmdb.org/t/p/original/'
function  Row(props) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData(){
            const request =await axios.get(props.fetchUrl);
            console.log(request)
            setMovies(request.data.results)
            return request;
        }
            fetchData();
    }, [props.fetchUrl])

    const opts={
        height:"390px",
        width:'100%',
        playerVars:{
            autoplay:1,
        },
    };
    const handleClick= (movie)=>{
        
        console.log("anme",movie.name)
        if(trailerUrl){
            console.log("efsf",trailerUrl)
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.name || movie?.title || '').then(url=>{
                const urlParams =new URLSearchParams(new URL(url).search);
                console.log('hkjhjkhk')
                setTrailerUrl(urlParams.get("v"));
                console.log("trailer:",trailerUrl)
            }).catch((error)=>console.log(error));
        }
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='row___posters'>
            {movies.map(movie =>(
                <img className={`row___poster ${props.isLargeRow && "row__posterlarger"}`}
                onClick={()=> handleClick(movie)}
                key={movie.id}
                src={`${baseUrl}${props.isLargeRow? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>

            ))}
            </div>
            {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
