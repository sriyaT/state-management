import React,{useContext, useState} from "react";
import {MovieContext} from "./MovieContext";
import Movie from "./Movie"; 


const MovieList = () =>{
    const [movies, setmovies] = useContext(MovieContext);
    
    return(
        <div>
            { movies.map(movie => (
            <Movie name={movie.name} price={movie.price} id= {movie.id} key = {movie.id} />
            ))}
        </div>
    );
}

export default MovieList;
