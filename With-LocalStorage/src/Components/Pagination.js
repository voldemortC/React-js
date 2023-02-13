const Pagination = ({perpage, totaldata, paginate}) => {
	const pageNumbers = [];
	for(var i = 1; i <= Math.ceil(totaldata/perpage); i ++){
		pageNumbers.push(i);
	}
	return(
		<nav>
			<ul className = "pagination">
				{
					pageNumbers.map(number => {
						return(
							<li key = {number} className = "page-item">
								<a onClick = {()=> {paginate(number)}} href = "#" className = "page-link">{number}</a>
							</li>
						)
					})
				}
			</ul>
		</nav>
	);
}	
export default Pagination;