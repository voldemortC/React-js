import REQUESTS from '../AxiosPost';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/effect-cards";
import './slidershow.css';

// console.log(REQUESTS, 'REQUESTS---')
export default function Trendingdlider(){
    const cdn = 'https://image.tmdb.org/t/p/original';
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=8b445d0567755b890836df8987cafeb7&page=1`;
    
    const [endpoint, setEndpoint] = useState(url);
    const [Trendslides, setTrendslides] = useState();

    useEffect(() =>{
        REQUESTS.POST(endpoint).then((res)=>{
            setTrendslides(res.data.results.slice(1,11))
        });
    },[] )

    // console.log("Trendslides", Trendslides);
    if(Trendslides !== undefined){
    return(
        // 
            <Swiper
                navigation={true}
                spaceBetween={0}
                slidesPerView={1}
                loop = {true}
                modules = {[Navigation, Thumbs]}
                autoplay={{delay: 2000}}
                navigation={true}
                breakpoints={{
                    540: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 20
                    },
                    720: {
                        slidesPerView: 3,
                        spaceBetweenSlides: 20
                    },
                    960: {
                        slidesPerView: 4,
                        spaceBetweenSlides: 20
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetweenSlides: 20
                    }
                  }}
                >
                {
                	(Trendslides.length > 0) ? Trendslides.map((item, i) => {
                		return(
                			<SwiperSlide key = {item.id}>
                                <div className='col-lg-12 col-md-6 col-sm-4 m-4' id = "Trending-slider">
                                <Link to = "../Series" className = "text-decoration-none">
                                    <div className='row'>
                                        <div className='col-md-2 trend-title'>
                                            <span className = " text-light h5">{item.name ? item.name : "No Title Available"}</span>
                                        </div>
                                        <div className='col-md-10'>
                                            <img className= "img-fluid w-75" src = {cdn.concat(item.poster_path)} />
                                        </div>
                                    </div>
                                </Link>
                                </div>
                			</SwiperSlide>
                		);
                	}) : null
                }
            </Swiper>
    )} else{
        return(
            // <h1 style = {{ color: "white" }}>It's not my fault it's the API &gt;///&lt; </h1>
            <h1 style = {{ color: "white" }}> Network error </h1>
        )
    };
}