import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js';
import Movie from './Components/Movie.js';
import Trending from './Components/Trending.js';
import Series from './Components/Series.js';
import Search from './Components/Search.js';
import Synopsis from './Components/Synopsis.js';
import logo from './Components/images/movflix.png';
export default function App(){
  return(
    <div>
      <Router>
        <div>
          <nav className = "navbar navbar-expand-lg navbar-dark navContainer">
            <a className='navbar-brand ms-4' href = "/Home"><img height = "50px" width = "155px" src = {logo} alt = "logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className='navbar-nav ms-auto me-5'>
                <li className = 'nav-item ps-4'>
                  <Link to = "/Home" className='nav-link '>Home</Link>
                </li>
                <li className = 'nav-item ps-4'>
                  <Link to = "/Movie" className='nav-link '>Movies</Link>
                </li>
                <li className = 'nav-item ps-4'>
                  <Link to = "/Trending" className='nav-link '>Trending</Link>
                </li>
                <li className = 'nav-item ps-4'>
                  <Link to = "/Series" className='nav-link ' >Series</Link>
                </li>
                <li className = 'nav-item ps-4'>
                  <Link to = "/Search" className='nav-link '>Search</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path = "*" element = {<Home/>} />
            <Route path = "/Movie" element = {<Movie/>} />
            <Route path = "/Trending" element = {<Trending/>} />
            <Route path = "/Series" element = {<Series/>} />
            <Route path = "/Search" element = {<Search/>} />
            <Route path = "/Synopsis" element = {<Synopsis/>} />
          </Routes>
        </div>
        {/* <div className='footerContainer'>
          Footer goes here....
        </div> */}
      </Router>
    </div>
  );
}