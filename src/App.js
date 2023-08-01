
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'
import "./App.css"
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=70a03ab0';



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm]=useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, [])
    return (
        <div className='app'>
            <h1>Sangam Cinema</h1>
            <div className='search'>
                <input
                    placeholder='search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (<div className='container'>
                        {
                            movies.map((movie)=>(
                                <MovieCard movie={movie}/>
                            ))
                        }
                    </div>) :
                    (
                        <div className='empty'>
                            <h3>No Movies found</h3>
                        </div>
                    )
            }

        </div>
    )
}

export default App
