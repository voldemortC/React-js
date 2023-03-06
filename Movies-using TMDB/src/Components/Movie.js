import { useEffect, useState } from 'react';
import Reactpaginate from './Paginate/Reactpaginate';
import REQUEST from './AxiosPost'
import './Paginate/paginate.css';

export default function Movie(){
    
    const [Count, SetCount] = useState(1);
    //URLS
    const cdn = "https://image.tmdb.org/t/p/original";

    //STATES
    const [Movies, setMovies] = useState(); 
    const [pagenum, SetPagenum] = useState(0);

    useEffect(()=>{
        REQUEST.POST(`https://api.themoviedb.org/3/discover/movie?api_key=8b445d0567755b890836df8987cafeb7&page=${Count}`).then((res)=>{
            setMovies(res.data.results);
            SetPagenum(500);
            console.log(Count, "<=-------------")
        })
    },[Count])

    const paginate = (Pagenumber) => {SetCount(Pagenumber)};

    if(Movies !== undefined){
        return(
            <div className='row m-6'>
                {
                    (Movies.length > 0) ? Movies.map((item, index)=>{
                        return(
                            <div key = {`movie-${item.id}`} className="col-lg-2 col-md-3 col-sm-4">
                                <img className= "img-thumbnail mt-5" src = {cdn.concat(item.poster_path)} alt= "image" />
                                <span className = "text-light h5 mt-2">{item.title ? item.title : "No Title Available"}</span>
                            </div>
                        )
                    }) : null
                }
                <div className='paginationContainer'>
                    <Reactpaginate paginate = { paginate } pagenum = {pagenum} />
                </div>
            </div>
        );
    }else{
        return(
            // <h1 style = {{ color: "white" }}>It's not my fault it's the API &gt;///&lt; </h1>
            <h1 style = {{ color: "white" }}> Network error </h1>
        )
    }
}