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
            let response = await fetch(basicMovieDataPath + '&s='+search + '&page='+curPage);
            let apiResult = await response.json();

            if (apiResult.Response !== "False") {
                setMovies(apiResult.Search)
                setTotPages(Math.ceil(apiResult.totalResults/ITEMS_PER_PAGE));
                setErrorMessage('');
            } else {
                setErrorMessage(apiResult.Error);
            }
        };

        getMovies();
    }, [basicMovieDataPath, search, curPage, errorMessage]);

    const manageChangeSearch = ({target}) => {
        setSearch(target.value);
        setCurPage(1);
    }

    return (
        <div className="App h-full flex flex-wrap justify-center">
            <h1 className="text-3xl mt-6 mb-0">I nostri film</h1>
            <form className="my-8 flex content-center justify-center w-full">
                <input name="search"
                       id="search"
                       className="rounded-l-lg p-3 border mx-8 text-gray-800 border-gray-200 bg-white w-full lg:3/6 md:w-2/3"
                       placeholder="Cerca un film..."
                       key="search"
                       type="search"
                       onBlur={manageChangeSearch} />
            </form>
            <MovieList movies={movies}
                       curPage={curPage}
                       errorMessage={errorMessage} />
            <PagerList totItems={totPages}
                       curPage={curPage}
                       setCurPage={setCurPage}
                       errorMessage={errorMessage} />
        </div>
    );
}

export default App;
