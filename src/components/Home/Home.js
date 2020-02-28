import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import IronNewsService from "../../services/IronNewsService";
import Card from "../UI/Card";
import customCategoriesArray from "../../constants/customCategories";

const prevState = [
	{
		author: null,
		content:
			"CLICCA QUI PER AGGIORNARE LA DIRETTA LIVE,09.57 Romain Grosjean si inserisce in seconda posizione con 1:17.980, a sette decimi da Sainz e con sette millesimi di vantaggio su Hamilton,09.55 I tifosi non mancano mai alla Ferrari.,big support for @ScuderiaFe… [+22872 chars]",
		description: "Il Tempio dello Sport",
		publishedAt: "2020-02-28T08:35:00Z",
		source: { id: null, name: "Oasport.it" },
		title:
			"LIVE F1, Test Barcellona 2020 in DIRETTA: Carlos Sainz in testa, Leclerc fermo ai box con la Ferrari - OA Sport",
		url:
			"https://www.oasport.it/2020/02/live-f1-test-barcellona-2020-in-diretta-day6-e-attacco-al-tempo-leclerc-e-la-ferrari-sotto-esame/",
		urlToImage:
			"https://www.oasport.it/wp-content/uploads/2020/02/Leclerc-2020-Test-13_@FOTOCATTAGNI-F1-600x400.jpg",
	},
	{
		author: null,
		content:
			"CLICCA QUI PER AGGIORNARE LA DIRETTA LIVE,09.57 Romain Grosjean si inserisce in seconda posizione con 1:17.980, a sette decimi da Sainz e con sette millesimi di vantaggio su Hamilton,09.55 I tifosi non mancano mai alla Ferrari.,big support for @ScuderiaFe… [+22872 chars]",
		description: "Il Tempio dello Sport",
		publishedAt: "2020-02-28T08:35:00Z",
		source: { id: null, name: "Oasport.it" },
		title:
			"LIVE F1, Test Barcellona 2020 in DIRETTA: Carlos Sainz in testa, Leclerc fermo ai box con la Ferrari - OA Sport",
		url:
			"https://www.oasport.it/2020/02/live-f1-test-barcellona-2020-in-diretta-day6-e-attacco-al-tempo-leclerc-e-la-ferrari-sotto-esame/",
		urlToImage:
			"https://www.oasport.it/wp-content/uploads/2020/02/Leclerc-2020-Test-13_@FOTOCATTAGNI-F1-600x400.jpg",
	},
	{
		author: null,
		content:
			"CLICCA QUI PER AGGIORNARE LA DIRETTA LIVE,09.57 Romain Grosjean si inserisce in seconda posizione con 1:17.980, a sette decimi da Sainz e con sette millesimi di vantaggio su Hamilton,09.55 I tifosi non mancano mai alla Ferrari.,big support for @ScuderiaFe… [+22872 chars]",
		description: "Il Tempio dello Sport",
		publishedAt: "2020-02-28T08:35:00Z",
		source: { id: null, name: "Oasport.it" },
		title:
			"LIVE F1, Test Barcellona 2020 in DIRETTA: Carlos Sainz in testa, Leclerc fermo ai box con la Ferrari - OA Sport",
		url:
			"https://www.oasport.it/2020/02/live-f1-test-barcellona-2020-in-diretta-day6-e-attacco-al-tempo-leclerc-e-la-ferrari-sotto-esame/",
		urlToImage:
			"https://www.oasport.it/wp-content/uploads/2020/02/Leclerc-2020-Test-13_@FOTOCATTAGNI-F1-600x400.jpg",
	},
	{
		author: null,
		content:
			"CLICCA QUI PER AGGIORNARE LA DIRETTA LIVE,09.57 Romain Grosjean si inserisce in seconda posizione con 1:17.980, a sette decimi da Sainz e con sette millesimi di vantaggio su Hamilton,09.55 I tifosi non mancano mai alla Ferrari.,big support for @ScuderiaFe… [+22872 chars]",
		description: "Il Tempio dello Sport",
		publishedAt: "2020-02-28T08:35:00Z",
		source: { id: null, name: "Oasport.it" },
		title:
			"LIVE F1, Test Barcellona 2020 in DIRETTA: Carlos Sainz in testa, Leclerc fermo ai box con la Ferrari - OA Sport",
		url:
			"https://www.oasport.it/2020/02/live-f1-test-barcellona-2020-in-diretta-day6-e-attacco-al-tempo-leclerc-e-la-ferrari-sotto-esame/",
		urlToImage:
			"https://www.oasport.it/wp-content/uploads/2020/02/Leclerc-2020-Test-13_@FOTOCATTAGNI-F1-600x400.jpg",
	},
	{
		author: null,
		content:
			"CLICCA QUI PER AGGIORNARE LA DIRETTA LIVE,09.57 Romain Grosjean si inserisce in seconda posizione con 1:17.980, a sette decimi da Sainz e con sette millesimi di vantaggio su Hamilton,09.55 I tifosi non mancano mai alla Ferrari.,big support for @ScuderiaFe… [+22872 chars]",
		description: "Il Tempio dello Sport",
		publishedAt: "2020-02-28T08:35:00Z",
		source: { id: null, name: "Oasport.it" },
		title:
			"LIVE F1, Test Barcellona 2020 in DIRETTA: Carlos Sainz in testa, Leclerc fermo ai box con la Ferrari - OA Sport",
		url:
			"https://www.oasport.it/2020/02/live-f1-test-barcellona-2020-in-diretta-day6-e-attacco-al-tempo-leclerc-e-la-ferrari-sotto-esame/",
		urlToImage:
			"https://www.oasport.it/wp-content/uploads/2020/02/Leclerc-2020-Test-13_@FOTOCATTAGNI-F1-600x400.jpg",
	},
];

const newState = [
	{
		author: null,
		content:
			"Lietuvoje ryt buvo patvirtintas pirmasis koronosviruso atvejis, kuris buvo ufiksuotas iauli mieste. Special posd suaukusi Ekstremali situacij komisija po jo sureng spaudos konferencij, kurioje Sveikatos ir apsaugos ministras Aurelijus Veryga patvirtino, jog … [+6172 chars]",
		description:
			"Lietuvoje šįryt buvo patvirtintas pirmasis koronosviruso atvejis, kuris buvo užfiksuotas Šiaulių mieste. Specialų posėdį sušaukusi Ekstremalių situacijų komisija po jo surengė spaudos konferenciją, kurioje Sveikatos ir apsaugos ministras Aurelijus Veryga patv…",
		publishedAt: "2020-02-28T08:26:15Z",
		source: { id: null, name: "Basketnews.lt" },
		title:
			"Po koronosviruso patvirtinimo Lietuvoje ant plauko pakibo artimiausios „Šiaulių“ rungtynės - basketnews.lt",
		url:
			"https://m.basketnews.lt/news-137768-po-koronosviruso-patvirtinimo-lietuvoje-ant-plauko-pakibo-artimiausios-siauliu-rungtynes.html",
		urlToImage: "https://m.basketnews.lt/paveikslelis-171898-any1000x1000.jpg",
	},
	{
		author: null,
		content:
			"Lietuvoje ryt buvo patvirtintas pirmasis koronosviruso atvejis, kuris buvo ufiksuotas iauli mieste. Special posd suaukusi Ekstremali situacij komisija po jo sureng spaudos konferencij, kurioje Sveikatos ir apsaugos ministras Aurelijus Veryga patvirtino, jog … [+6172 chars]",
		description:
			"Lietuvoje šįryt buvo patvirtintas pirmasis koronosviruso atvejis, kuris buvo užfiksuotas Šiaulių mieste. Specialų posėdį sušaukusi Ekstremalių situacijų komisija po jo surengė spaudos konferenciją, kurioje Sveikatos ir apsaugos ministras Aurelijus Veryga patv…",
		publishedAt: "2020-02-28T08:26:15Z",
		source: { id: null, name: "Basketnews.lt" },
		title:
			"Po koronosviruso patvirtinimo Lietuvoje ant plauko pakibo artimiausios „Šiaulių“ rungtynės - basketnews.lt",
		url:
			"https://m.basketnews.lt/news-137768-po-koronosviruso-patvirtinimo-lietuvoje-ant-plauko-pakibo-artimiausios-siauliu-rungtynes.html",
		urlToImage: "https://m.basketnews.lt/paveikslelis-171898-any1000x1000.jpg",
	},

	{
		author: null,
		content:
			"Lietuvoje ryt buvo patvirtintas pirmasis koronosviruso atvejis, kuris buvo ufiksuotas iauli mieste. Special posd suaukusi Ekstremali situacij komisija po jo sureng spaudos konferencij, kurioje Sveikatos ir apsaugos ministras Aurelijus Veryga patvirtino, jog … [+6172 chars]",
		description:
			"Lietuvoje šįryt buvo patvirtintas pirmasis koronosviruso atvejis, kuris buvo užfiksuotas Šiaulių mieste. Specialų posėdį sušaukusi Ekstremalių situacijų komisija po jo surengė spaudos konferenciją, kurioje Sveikatos ir apsaugos ministras Aurelijus Veryga patv…",
		publishedAt: "2020-02-28T08:26:15Z",
		source: { id: null, name: "Basketnews.lt" },
		title:
			"Po koronosviruso patvirtinimo Lietuvoje ant plauko pakibo artimiausios „Šiaulių“ rungtynės - basketnews.lt",
		url:
			"https://m.basketnews.lt/news-137768-po-koronosviruso-patvirtinimo-lietuvoje-ant-plauko-pakibo-artimiausios-siauliu-rungtynes.html",
		urlToImage: "https://m.basketnews.lt/paveikslelis-171898-any1000x1000.jpg",
	},
];

// Crear método que haga petición la API

//Hace petición a la API desde component did update

class Home extends React.Component {
	state = {
		data: {
			articles: [],
			category: this.props.currentUser.customCategories,
		},
		isLoading: true,
		submited: false,
	};

	handleChange = event => {
		const value = event.target.value;
		this.setState({
			data: {
				...this.state.data,
				category: [value],
			},
			isLoading: true,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			submited: true,
			isLoading: true,
		});
	};

	componentDidMount() {
		console.log("component did mount");
		IronNewsService.landing(this.state.data.category)
			.then(responseArticles => {
				this.setState({
					data: {
						category: this.state.data.category,
						articles: responseArticles.articles,
					},
					submited: false,
					isLoading: false,
				});
			})
			.catch(error => console.log(error));
	}

	componentDidUpdate(_, prevState) {
		console.log("this is the prevState =>", prevState);
		console.log(prevState.data.category !== this.state.data.category);
		if (prevState.data.category !== this.state.data.category) {
			console.log("this is the cateogry i am sending=>", this.state.data.category)
			IronNewsService.landing(this.state.data.category)
				.then(responseArticles => {
					this.setState({
						data: {
							category: this.state.data.category,
							articles: responseArticles.articles
						},
						isLoading: false,
					});
				})
				.catch(error => console.log(error));
		}
	}

	render() {
		console.log("rendering");
		return (
			<div>
				<h3>This is your feed for today</h3>
				<h3>Or look of a category</h3>
				<form className="mb-4" onSubmit={this.handleSubmit}>
					<select
						onChange={this.handleChange}
						value={this.props.currentUser.category}
						className="custom-select custom-select-mg mt-3"
						name="category"
					>
						{customCategoriesArray.map((category, key) => {
							return (
								<option key={key} value={category}>
									{category.charAt(0).toUpperCase() + category.slice(1)}
									{}
								</option>
							);
						})}
					</select>
					<button
						type="submit"
						className="btn btn-success"
						disabled={this.state.isLoading}
					>
						Search ...
					</button>
				</form>

				{!this.state.isLoading ? <Card articles={this.state.data.articles}/> : <h3>Loading ....</h3>}
			</div>
		);
	}
}

export default WithAuthConsumer(Home);

// import React from "react";
// import { WithAuthConsumer } from "../../contexts/AuthContext";
// import IronNewsService from "../../services/IronNewsService";
// import Card from "../UI/Card";
// import customCategoriesArray from "../../constants/customCategories";

// class Home extends React.Component {
// 	state = {
// 		data: {
// 			articles: [],
// 			category: "",
// 		},
// 		// isLoading: true,
// 		// submited: false,
// 	};

// 	handleChange = event => {
// 		console.log("this is the target value=> ", event.target.name);
// 		const [name, value] = event.target;
// 		this.setState({
// 			data: {
// 				...this.state.data,
// 				[name]: value,
// 			},
// 		});
// 	};

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState !== this.state) {
// 			console.log("state in didUpdate =>", this.state);
// 			return true;
// 			// IronNewsService.landing(this.state.data.category)
// 			// 	.then(responseArticles => {
// 			// 		this.setState({
// 			// 			data: {
// 			// 				...this.state.data,
// 			// 				articles: [responseArticles],
// 			// 			},
// 			// 		});
// 			// 	})
// 			// 	.catch(error => console.log(error));
// 		}
// 	}
// 	handleSubmit = event => {
// 		event.preventDefault();
// 		console.log("this is the target value=> ", event.target.value);
// 		// this.getArticlesByCategory(event.target.value);
// 		this.setState({
// 			data: { ...this.state.data, category: event.target.value },
// 			isLoading: false,
// 			submited: true,
// 		});
// 		console.log("state on submit=>", this.state);
// 	};

// 	// getArticlesByCategory(category) {
// 	// 	IronNewsService.landing(category)
// 	// 		.then(responseArticles => {
// 	// 			this.setState({
// 	// 				data: {
// 	// 					...this.state.data,
// 	// 					articles: responseArticles.articles,
// 	// 				},
// 	// 				isLoading: false,
// 	// 			});
// 	// 		})
// 	// 		.catch(error => console.log(error));
// 	// }

// 	// componentDidMount() {
// 	// 	this.getArticlesByCategory(this.props.currentUser.customCategory);
// 	// }

// 	// componentDidUpdate(prevProps, prevState) {
// 	// 	// console.log("=========================================");
// 	// 	// console.log("This is prevState => ", prevState.data.category);
// 	// 	// console.log("This is newCategory => ", this.state.data.category);

// 	// 	const prevCategory = prevState.data.category;
// 	// 	const newCategory = this.state.data.category;
// 	// 	if (prevCategory !== newCategory && this.state.submited) {
// 	// 		// peticion con la nueva categoria y setstate en el then
// 	// 		console.log("Supera el if? =>", newCategory);
// 	// 		return true;
// 	// 		// this.getArticlesByCategory(newCategory);
// 	// 	}
// 	// }

// 	render() {
// 		return (
// 			<div>
// 				<h3>This is your feed for today</h3>
// 				<h3>Or look of a category</h3>
// 				<form className="mb-4" onSubmit={this.handleSubmit}>
// 					<select
// 						onChange={this.handleChange}
// 						value={this.state.data.category}
// 						className="custom-select custom-select-mg mt-3"
// 						name="category"
// 					>
// 						{customCategoriesArray.map((category, key) => {
// 							return (
// 								<option key={key} value={category} name="category">
// 									{category.charAt(0).toUpperCase() + category.slice(1)}
// 									{}
// 								</option>
// 							);
// 						})}
// 					</select>
// 					<button
// 						type="submit"
// 						className="btn btn-success"
// 						disabled={this.state.isLoading}
// 					>
// 						Search ...
// 					</button>
// 				</form>
// 				{/* {!this.state.isLoading ? ( */}
// 				<Card articles={this.state.data.articles} />
// 				{/* ) : (
// 					<h3>Loading ...</h3>
// 				)} */}
// 			</div>
// 		);
// 	}
// }

// export default WithAuthConsumer(Home);
