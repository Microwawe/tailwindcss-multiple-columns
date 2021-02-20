const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const pseudoPlugin = require('..');


const generatePluginCss = (options = {}) => {
	return postcss(tailwindcss({corePlugins: false, plugins: [pseudoPlugin]}))
	.process('@tailwind utilities;', {
		from: undefined,
	})
	.then(result => result.css)
	.catch(e => console.error(e));
};


const allShouldMatch = (original, classes, shouldMatch) =>  {
	if (!Array.isArray(classes)) {
		return {
			message: () => `the tested classes need to be in an array`,
			pass: false,
		};
	}

	const stripped = css => css.replace(/[;\s]/g, '');
	const matches = classes.filter(css => stripped(original).includes(stripped(css)));
	const allMatch = matches.length == classes.length;
	const noneMatch = matches.length == 0;
	let response = {
		message: '',
		pass: false,
	}

	if ((shouldMatch && allMatch) || (!shouldMatch && noneMatch)) {
		response.pass = true;
	} else {
		response.message = shouldMatch 
			? () => `expected ${original} \nto include \n${matches.join('\n')}` 
			: () => `expected ${original} \nto not include \n${matches.join('\n')}`
	}
	return response;
}

const toIncludeCss = (original, classes) => {
	return allShouldMatch(original, classes, true);
};

const toNotIncludeCss = (original, classes) => {
	return allShouldMatch(original, classes, false);
};

module.exports = [toIncludeCss, toNotIncludeCss, generatePluginCss];
