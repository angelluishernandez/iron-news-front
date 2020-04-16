import React, { useState, useEffect } from "react";
import FiltersComponent from "./Filters";
import CardComponent from "./CardComponent";
import PaginationComponent from "./PaginationComponent";

const articles = [
	{
		source: {
			id: "engadget",
			name: "Engadget",
		},
		author: "Christine Fisher",
		title:
			"Pentagon probe can’t confirm Trump interfered with the JEDI contract",
		description:
			"After a months-long saga over whether President Trump’s “personal vendetta” cost Amazon a $10 billion Pentagon contract, the Pentagon’s inspector general said it found no evidence that the decision to award the cloud-computing contract to Microsoft was the re…",
		url:
			"https://www.engadget.com/pentagon-trump-amazon-jedi-contract-162147083.html",
		urlToImage:
			"https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2020-04%2Fbee894e0-7f31-11ea-bffd-fee9e733ebaf&client=amp-blogside-v2&signature=1dabd5102320dfa4166c1af33c0adc34b01d47f2",
		publishedAt: "2020-04-15T16:21:47Z",
		content:
			"“We could not definitively determine the full extent or nature of interactions that administration officials had, or may have had, with senior DoD officials regarding the JEDI Cloud procurement because of the assertion of a ‘presidential communications privil… [+1005 chars]",
	},
	{
		source: {
			id: "wired",
			name: "Wired",
		},
		author: "Gilad Edelman",
		title: "Trump Voters Aren't Staying In As Much As Everybody Else",
		description:
			"Republicans say they're less afraid of Covid-19 than Democrats, and new research based on cell phone data shows they're acting like it, too.",
		url:
			"https://www.wired.com/story/trump-voters-arent-staying-in-as-much-as-everybody-else/",
		urlToImage:
			"https://media.wired.com/photos/5e9657c04c290b0009d63501/191:100/w_1280,c_limit/Trump-Voters-Aren't-Staying-In-As-Much-As-Everybody-Else.jpg",
		publishedAt: "2020-04-15T13:00:00Z",
		content:
			"Should membership in the Republican party count as a risk factor for Covid-19? \r\nThats one way to interpret some very recent research into how political partisanship has been affecting social behavior in response to the pandemic. For the latest study on this … [+4960 chars]",
	},
	{
		source: {
			id: "cnn",
			name: "CNN",
		},
		author: null,
		title: "Roll the Tape: Trump praised China's response in February",
		description:
			"President Donald Trump has criticized the World Health Organization for praising China's initial response to the coronavirus pandemic even though he praised China a number of times in February 2020.",
		url:
			"https://www.cnn.com/videos/politics/2020/04/15/trump-blames-who-past-china-comments-cpt-sot-vpx.cnn",
		urlToImage:
			"https://cdn.cnn.com/cnnnext/dam/assets/200414235810-donald-trump-april-14-2020-01-super-tease.jpg",
		publishedAt: "2020-04-15T04:12:53Z",
		content:
			"Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
	{
		source: {
			id: "mashable",
			name: "Mashable",
		},
		author: "Sam Haysom",
		title:
			"This clever Trump press conference parody hits the nail on the head",
		description:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply…",
		url: "https://mashable.com/video/trump-press-conference-advisor-sketch/",
		urlToImage:
			"https://mondrian.mashable.com/2020%252F04%252F15%252F8d%252Fef12740a35254c2eaaa02fc75d8aac74.4acab.jpg%252F1200x630.jpg?signature=UA0WCoeuygWUZN2oAp4T8Nyor8c=",
		publishedAt: "2020-04-15T09:17:59Z",
		content:
			"Trump doesn't appear to have an earpiece in during his press conferences, but can you imagine if he did? Can you imagine what the person on the other end might be yelling, as the president proceeded to ramble on about how the coronavirus pandemic would simply… [+447 chars]",
	},
];

class NewHome extends React.Component {
	state = {
		news: [],
		loading: true,
		currentPage: 1,
		newsPerPage: 5,
	};

	componentDidMount() {
		this.setState({
			news: articles,
			loading: false,
		});
	}

	changePage = (pageNumber) => {
		this.setState({
			currentPage: pageNumber,
		});
	};
	render() {
		const indexOfLastNews = this.state.currentPage * this.state.newsPerPage;
		const indexOfFirstNews = indexOfLastNews - this.state.newsPerPage;
		const currentNews = this.state.news.slice(
			indexOfFirstNews,
			indexOfLastNews
		);
		return (
			<div className="NewHome">
				<div className="container">
					<h1>Holi</h1>
					<div className="row">
						<div className="col-md-3 mt-3 mb-3 ">
							<h3 className="p-3">Filters</h3>
							<FiltersComponent />
						</div>
						<div className="col-md-9 cards-column">
							<CardComponent news={currentNews} loading={this.state.loading} />
							<PaginationComponent
								newsPerPage={this.state.newsPerPage}
								totalNews={articles.length}
								paginate={this.changePage}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewHome;
