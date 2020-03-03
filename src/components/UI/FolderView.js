import React from "react";
import Card from "./Card";
import { WithAuthConsumer } from "../../contexts/AuthContext";

class FolderView extends React.Component {
	state = {
		loading: true,
		savedArticles: {},
	};

	componentDidMount() {
    console.log(this.props)
		// this.props.getFolderNews(this.props.params.folderId);
		// this.setState({
		// 	loading: false,
		// 	savedArticles: this.props.savedArticles,
		// });
	}
	render() {
		return (
			<div className="FolderView">
				{!this.state.loading
					? this.state.savedArticles.map((savedArticle, index) => {
							return (
								<Card
									title={savedArticle.title}
									url={savedArticle.url}
									urlToImage={savedArticle.urlToImage}
									description={savedArticle.description}
									publishedAt={savedArticle.publishedAt}
									key={index}
									isInFolder={true}
								/>
							);
					  })
					: null}
			</div>
		);
	}
}

export default WithAuthConsumer(FolderView);
