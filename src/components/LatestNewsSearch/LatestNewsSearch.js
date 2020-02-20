import React from "react";
import IronNewsService from "../../services/IronNewsService";


class LatestNewsSearch extends React.Component {


  state = {
		data: {
      articles: [],
			query: "",
		},
		error: true,
		loading: false,
	};
	handleChange = event => {
		const { name, value } = event.target;
		console.log(this.state.data);
		this.setState({
			data: { ...this.state.data, [name]: value },
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ loading: true, error: false }, () => {
			const query = this.state.data.query;
			console.log("This is the query=> ", query);

			IronNewsService.getLatestNews({query})
        .then(resp => {console.log(resp)
        this.setState({
          loading: false, 
          errors: false, 
          articles: resp.articles
        })})
				.catch(error => console.log(error));
		});
	};
  
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="query">Topic</label>
        <input
          type="text"
          value={this.state.data.query}
          onChange={this.handleChange}
          placeholder="Look for something..."
          name="query"
        />
  
        <button
          className="btn btn-success mr-1"
          id="signin-btn2"
          disabled={this.state.loading}
        >
          Search{" "}
        </button>
      </form>
      
    );


  }
  
  
};

export default LatestNewsSearch;
