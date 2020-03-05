import React from "react";
import Card from "./Card";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import IronNewsService from "../../services/IronNewsService";
import "./Card.css"
import "./FolderView.css"

class FolderView extends React.Component {
	state = {
		savedArticles: {},
		loading: true, 
		isMounted: true
	};

	deleteNewsInFolder = (event, folderId, newsId) => {
		event.preventDefault();

		console.log("entra")
		// console.log("eNTRa")
		// console.log(event, folderId, newsId, )
		// const newsArray = this.state.savedArticles.filter(news => news._id !== newsId);
		// this.setState({
		// 	...this.state,
		// 	savedArticles: newsArray,
		// });
		// IronNewsService.deleteNewsInFolder(folderId, newsId)
		// 	.then(news => console.log("This news has been deleted=>", news))
		// 	.catch(error => console.log(error));
	};

	componentDidMount() {
		console.log("entra en component did mount")
		if(this.state.isMounted){
			IronNewsService.listNewsInFolder(this.props.folderId)
			.then(news => {
				
					this.setState({
						savedArticles: news,
						loading: false
					});
			
				
			})
			.catch(error => console.log(error));
		}

	}

	componentWillUnmount(){
		this.setState({
			...this.state, 
			isMounted: false
		})
	}
	render() {
		console.log("this is the folder id=>", this.props)
		console.log("this is the state en component did mount=> ", this.state.savedArticles)
		return (
			<div className="FolderView">
				<div>
					<h3>These are the news you saved to this folder</h3>
				</div>
				
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
								folderId={this.props.folderId}
								isInFolder={true}
								deleteNewsInFolder={this.deleteNewsInFolder}
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
