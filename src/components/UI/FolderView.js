import React from "react";
import Card from "./Card";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import IronNewsService from "../../services/IronNewsService";
import "./Card.css"
import "./FolderView.css"

class FolderView extends React.Component {
	state = {
		savedArticles: {},
		loading: true
	};

	

	componentDidMount() {
		IronNewsService.listNewsInFolder(this.props.folderId)
			.then(news => {
				this.setState({
					savedArticles: news,
					loading: false
				});
			})
			.catch(error => console.log(error));

	}
	render() {
		console.log("this is the folder id=>", this.props)
		console.log("this is the state en component did mount=> ", this.state.savedArticles)
		return (
			<div className="FolderView">
				
			{!this.state.loading
				? <div className="row mt-5 mr-3 ml-3"> 
				{this.state.savedArticles.map((savedArticle, index) => {
						return (
							<Card
								title={savedArticle.headline}
								url={savedArticle.url}
								urlToImage={savedArticle.image}
								description={savedArticle.description}
								publishedAt={savedArticle.date}
								key={index}
								isInFolder={true}
							/>
						);
					})}
					</div>
				: null}
			</div>
		);
	}
}

export default WithAuthConsumer(FolderView);
