import React,{useContext} from "react";
import {MovieContext} from "./MovieContext";
import {style} from "./Nav.css";

const Nav = () =>{
    const[movies, setMovies] =useContext(MovieContext);
    return(
        <div className="NavBar" style={style} >
            <h3 className="Name">Sriya</h3>
            <p className="List">List Of Movies:{movies.length}</p>
        </div>
    );
}

export default Nav;

