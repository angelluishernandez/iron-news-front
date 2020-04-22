export const reduceArr = (arr) =>
	arr
		.map((item) => item.source.name)
		.reduce((unique, item) => {
			return unique.includes(item) ? unique : [...unique, item];
		}, []);

export const authorReducer = (arr) =>
	arr
		.map((item) => item.author)
		.reduce((unique, item) => {
			return unique.includes(item) ? unique : [...unique, item];
		}, []);
