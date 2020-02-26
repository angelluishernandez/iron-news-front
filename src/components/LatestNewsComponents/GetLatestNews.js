import React from "react";
import LatestNewsSearch from "./LatestNewsSearch";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";

class GetLatestNews extends React.Component {
	state = {
		data: {
			queryText: "",
			articles: [
				{
					source: {
						id: null,
						name: "Newsbtc.com",
					},
					author: "Nick Chong",
					title:
						"$9,000 is “Do or Die” for Bitcoin: Can Bulls Hold the Price Point?",
					description:
						"Over the past hour or two, Bitcoin bulls have been attempting to defend $9,000: just look below, where you can see a number of wicks below that price on the 15-minute chart. Thus far, $9,000 has been defended, with every print of a price below $9,000 quickly …",
					url:
						"https://www.newsbtc.com/2020/02/26/9000-do-die-for-bitcoin-can-bulls-hold-price-point/",
					urlToImage:
						"https://www.newsbtc.com/wp-content/uploads/2019/09/shutterstock_1005777274-1200x780.jpg",
					publishedAt: "2020-02-26T14:34:17Z",
					content:
						"Over the past hour or two, Bitcoin bulls have been attempting to defend $9,000: just look below, where you can see a number of wicks below that price on the 15-minute chart. Thus far, $9,000 has been defended, with every print of a price below $9,000 quickly … [+2031 chars]",
				},
				{
					source: {
						id: null,
						name: "Newsbtc.com",
					},
					author: "Yashu Gola",
					title:
						"Hong Kong’s Latest Budget is Bullish for Crypto, Says Top Fund Manager",
					description:
						"Hong Kong’s efforts to come out of an economic slump could send the crypto market flying, according to Jeff Dorman of Arca, a New York-based investment management firm. The Chief Investment Officer envisioned a fruitful future for emerging crypto assets, espe…",
					url:
						"https://www.newsbtc.com/2020/02/26/hong-kongs-latest-budget-is-bullish-for-crypto-says-top-fund-manager/",
					urlToImage:
						"https://www.newsbtc.com/wp-content/uploads/2020/02/shutterstock_431291731-1200x780.jpg",
					publishedAt: "2020-02-26T14:10:21Z",
					content:
						"Hong Kong’s efforts to come out of an economic slump could send the crypto market flying, according to Jeff Dorman of Arca, a New York-based investment management firm.\r\nThe Chief Investment Officer envisioned a fruitful future for emerging crypto assets, esp… [+2566 chars]",
				},
				{
					source: {
						id: null,
						name: "Yahoo.com",
					},
					author: "Yogita Khatri",
					title: "Finland’s customs agency has $15M in seized bitcoin",
					description:
						"Finland's customs agency, Tulli, has 1,666 bitcoins (currently worth over $15 million) in its possession.The post Finland's customs agency has $15M in seized bitcoin appeared first on The Block.",
					url:
						"https://finance.yahoo.com/news/finland-customs-agency-15m-seized-140014849.html",
					urlToImage:
						"https://s.yimg.com/ny/api/res/1.2/fJy6CRyzJ8JiSEqCFbsQBw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD04NTMuMzMzMzMzMzMzMzMzNA--/https://s.yimg.com/uu/api/res/1.2/9UCscYRa7mf6mlkWc2p87Q--~B/aD00NTA7dz02NzU7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/the_block_83/fbfaeaf77727307d66cd16d6b27d70ba",
					publishedAt: "2020-02-26T14:00:14Z",
					content:
						"Finland's customs agency, Tulli, has 1,666 bitcoins (currently worth over $15 million) in its possession.\r\nThe agency seized the bitcoins years ago in a major drug bust, but hasn't cashed it out yet, Finland's national public broadcasting firm Yle reported Tu… [+962 chars]",
				},
			],
		},
		loading: false,
		error: true,
		submited: false,
	};

	handleChange = query => {
		this.setState(prevState => ({
			data: {
				...prevState.data,
				queryText: query,
			},
		}));
	};
	handleSubmit = query => {
		IronNewsService.getLatestNews({ query })
			.then(responseArticles => {
				this.setState(prevState => ({
					data: {
						...prevState.data,
						articles: [...prevState.data.articles, responseArticles.articles],
						submited: true,
					},
				}));
				console.log(this.state.data.articles)
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div className="GetLatestNews">
				<LatestNewsSearch
					onSearchChange={this.handleChange}
					onSubmitSearch={this.handleSubmit}
				/>
				<Card articles={this.state.data.articles}></Card>
				{/* <div>
					{this.state.submited && (
						<Card
							articles={this.state.data.articles}
							loading={this.state.loading}
							error={this.state.error}
						/>
					)}
				</div> */}
			</div>
		);
	}
}

export default GetLatestNews;
