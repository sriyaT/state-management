import React,{useState, createContext} from "react";
import MovieList from "./MovieList";

export const MovieContext  = createContext();

export const MovieProvider = (props) =>{
    const [movies, setMovies] =useState([
        {
            name: "Harry Porter",
            price: '$10',
            id:23124
        },
        {
            name: "Game Of Thrones",
            price: '$20',
            id:32124
        },
        {
            name: "Inception",
            price: '$30',
            id:2312488
        }
    
    ]);
    
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}