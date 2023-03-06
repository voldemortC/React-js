import Slider from './SlideShow/Slider';
import Trendingslider from './SlideShow/Trendingslider';
import Serieslides from './SlideShow/Serieslider';
import Movieslider from './SlideShow/Movieslider';
import {Link} from 'react-router-dom';
import './home.css'
export default function Home(){
    return(
        <div>
            <div className='Slider'>
                <Slider />
            </div>
            <Link className = "text-decoration-none" to = "/Trending"><h1 className = "text-light m-3">Trending..</h1></Link>
            <div className='m-3'>
                <div className='row ms-2'>
                    <Trendingslider />
                </div>
            </div>
            <Link to = "/Series" className = "text-decoration-none"><h1 className = "text-light m-3">Series..</h1></Link>
            <div className='m-3'>
                <div className='row ms-2'>
                    <Serieslides />
                </div>
            </div>
            <Link to = "/Movie" className = "text-decoration-none"><h1 className = "text-light m-3">Movies..</h1></Link>
            <div className='m-3'>
                <div className='row ms-2'>
                    <Movieslider />
                </div>
            </div>
        </div>
    );
}