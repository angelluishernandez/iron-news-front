import React from "react";
import ReactPaginate from "react-paginate";

class Pagination extends React.Component {
	state = {
		offset: 0,
		data: [],
		perPage: 5,
		currentPage: 0,
		pageCount: null,
	};

  receivedData(){
    
  }

	componentDidMount() {



  }

	handlePageClick = e => {
		const selectedPage = e.selected;

		const offset = selectedPage * this.state.perPage;

		this.setState({
			currentPage: selectedPage,
			offset: offset,
		});
	};

	render() {
		return (
			<ReactPaginate
				previousLabel={"prev"}
				nextLabel={"next"}
				breakLabel={"..."}
				breakClassName={"break-me"}
				pageCount={this.state.pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={this.handlePageClick}
				containerClassName={"pagination"}
				subContainerClassName={"pages pagination"}
				activeClassName={"active"}
			/>
		);
	}
}

export default Pagination;
