import React, {useState, useEffect} from 'react';
import MovieList from "./Movie/MovieList";
import PagerList from "./Pager/PagerList";
import './App.css';

function App() {
    const APIKEY = '64704c0c';
    const APIURL = 'http://www.omdbapi.com';
    const ITEMS_PER_PAGE = 10;
    const basicMovieDataPath = APIURL + '?apikey=' + APIKEY + '&type=movie';

    const [movies, setMovies] = useState([]);
    const [totPages, setTotPages] = useState(1);

    const [curPage, setCurPage] = useState(1);
    const [search, setSearch] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const getMovies = async () => {
            await fetch(basicMovieDataPath + '&s='+search + '&page='+curPage)
                .then(res => res.json())
                .then(apiResult => {
                    if (apiResult.Response !== "False") {
                        setMovies(apiResult.Search)
                        setTotPages(Math.ceil(apiResult.totalResults/ITEMS_PER_PAGE));
                        setErrorMessage('');
                    } else {
                        setErrorMessage(apiResult.Error);
                    }
                });
        };

        getMovies();
    }, [basicMovieDataPath, search, curPage, errorMessage]);

    const manageChangeSearch = ({target}) => {
        setSearch(target.value);
        setCurPage(1);
    }

    return (
        <div className="App">
            <h1>My favorite movies</h1>
            <form>
                <input name="search"
                       id="search"
                       key="search"
                       type="search"
                       onBlur={manageChangeSearch} />
            </form>
            <MovieList movies={movies}
                       albumSelected={curPage}
                       errorMessage={errorMessage} />
            <PagerList totItems={totPages}
                       errorMessage={errorMessage}
                       setCurPage={setCurPage} />
        </div>
    );
}

export default App;
