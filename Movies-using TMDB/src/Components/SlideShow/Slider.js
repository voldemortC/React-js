import REQUESTS from '../AxiosPost';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Autoplay, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './slidershow.css';

// console.log(REQUESTS, 'REQUESTS---')
export default function Home(){
    const cdn = 'https://image.tmdb.org/t/p/original';
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=8b445d0567755b890836df8987cafeb7&page=1`;
    const [endpoint, setEndpoint] = useState(url);
    const [slides, setSlides] = useState();

    useEffect(() =>{
        REQUESTS.POST(endpoint).then((res)=>{
            setSlides(res.data.results.slice(1,6))
        }); 
    },[] )

    if(slides !== undefined){
    return(
        <div>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                loop = {true}
                modules = {[Navigation, Thumbs]}
                autoplay={{delay: 2000}}
                navigation={true}
               
            >
                {
                	(slides.length > 0) ? slides.map((item, i) => {
                		return(
                			<SwiperSlide key = {item.id}>
                                <div id = "imageContainer" className = "image-container">
                				    <img height = "740px" width = "100%" src = {cdn.concat(item.backdrop_path)} />
                                </div>      
                                <div className="text-container">                    
                                    <h1 className = "display-4 movieTitle">{item.original_title ? item.original_title : item.name}</h1>
                                    <p className = "text-light mt-3 movieOverview">{item.overview}</p>
                                    <p className = "text-light mt-3">Release Date: {item.release_date}</p>
                                    <Link to = {'./Synopsis'} state={{ movieInfo: item }} className = "text-decoration-none">
                                        <button className='btn btn-color-grandient'>Watch</button>
                                    </Link>
                                </div>
                			</SwiperSlide>
                		);
                	}) : null
                }
            </Swiper>
        </div>
    )} else{
        return(
            // <h1 style = {{ color: "white" }}>It's not my fault it's the API &gt;///&lt; </h1>
            <h1 style = {{ color: "white" }}> Network error </h1>
        )
    };
}