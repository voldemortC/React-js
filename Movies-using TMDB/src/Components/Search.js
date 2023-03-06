import {useState, useEffect} from 'react';
import REQUESTS from './AxiosPost';
import './Search.css';

export default function Search(){
    const cdn = `https://image.tmdb.org/t/p/original`;
    const[query, setQuery] = useState([]);
    const[result, setResult] =  useState([]);

    useEffect(()=>{
        REQUESTS.POST(`https://api.themoviedb.org/3/search/multi?api_key=8b445d0567755b890836df8987cafeb7&query=${query}`).then((res)=>{
            setResult(res.data.results);
        })
    }, [query])

    return(
        <div>
            <div className="searchContainer text-center">
                <h3 className='text-light mb-4'>Find Movies, Tv Shows and More...</h3>
                <input className='form-control ms-auto me-auto' type = "text" placeholder = "Enter Keyword..." onChange = {(e)=>setQuery(e.target.value)} />
            </div>
            <div className='row'>
            {
                (result.length > 0) ? result.map((item,index)=>{
                    return(
                        <div key = {`result-${item.id}`} className="col-lg-2 col-md-3 col-sm-4">
                            <img className= "img-thumbnail mt-5" src = {cdn.concat(item.poster_path)} alt= "image" />
                            <span className = "text-light h5 mt-2">{item.title ? item.title : item.name}</span>
                        </div>
                    )
                }) : null
            }
            </div>
        </div>
    );
}