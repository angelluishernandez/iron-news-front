import React from "react";

const PaginationComponent = ({ newsPerPage, totalNews, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className="pagination justify-content-end">
				{pageNumbers.map((pageNumber) => (
					<li key={pageNumber} className="page-item">
						<a
							onClick={() => paginate(pageNumber)}
							className="page-link"
							tabIndex="-1"
						>
							{pageNumber}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default PaginationComponent;
