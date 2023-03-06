import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import './paginate.css';

const Reactpaginate= ({paginate, pagenum}) => {
    const[selectedPage, setSeletedPage] = useState();
	const[pageCount, setpageCount] = useState(pagenum);

    const handlesClick = (e) =>{
		const selectedPage = e.selected + 1;
		setSeletedPage(selectedPage)
		paginate(selectedPage);
	}

    return(
        <ReactPaginate 
            previousLabel = {"prev"}
            nextLabel = {"next"}
            breakLabel = {"..."}
            pageRangedisplayed = {2}
            pageCount = {pageCount}
            onPageChange = {handlesClick}
            containerClassName = {"ulPegination"}
        />
    )
}
export default Reactpaginate;