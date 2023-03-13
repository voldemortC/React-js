import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Synopsis.css';
export default function Synopsis(){
    const cdn = 'https://image.tmdb.org/t/p/original';

    const location = useLocation();
    const { movieInfo } = location.state;
	const navigate = useNavigate();
    // console.log(movieInfo.adult,"<=--------");
    return(
        <div className='wrap'>
            <div className='container wrappner mt-auto mb-auto'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div>
                            <img src = {cdn.concat(movieInfo.poster_path)} className = "img-fluid" />
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-12 text-light textContainer'>
                        <p className='display-4 mb-4'>{(movieInfo.name)? movieInfo.name : movieInfo.title}</p>
                        <p className='fs-5 synopsisOverview'>{movieInfo.overview}</p>
                        <p className='fs-5'>Release Date : {(movieInfo.first_air_date )? movieInfo.first_air_date : movieInfo.release_date}</p>
                        <p className='fs-5'>Media Type: {(movieInfo.media_type) ? movieInfo.media_type : movieInfo.media_type}</p>
                        <p className='fs-5'>Original Language: {movieInfo.original_language}</p>
                        <p className='fs-5'>Adult: {(movieInfo.adult) ? "true" : "false"}</p>
                    </div>
                </div>
            </div>
            <img src = {cdn.concat(movieInfo.backdrop_path)} className = "img-fluid backgroudImage" />  
        </div>
    );
}
