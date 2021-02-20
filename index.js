const multiColumnPlugin = function ({addUtilities, config, e}) {
	const columnCounts = ['auto', '1', '2', '3', '4'];
	const columnSpanValues = ['none', 'all', 'inherit', 'initial', 'unset'];
	const columnFillValues = ['auto', 'balance', 'balance-all', 'inherit', 'initial', 'unset'];
	const columnRuleWidthValues = ['thin', 'medium', 'thick'];
	const borderStyles = [
		'none',
		'hidden',
		'dotted',
		'dashed',
		'solid',
		'double',
		'groove',
		'ridge',
		'inset',
		'outset',
	];
	const configSpacing = config('theme.spacing', []);
	const configBorderWidths = config('theme.borderWidth', []);
	const configColors = config('theme.colors', []);
	const variants = config('variants.multiColumn', []);
	const utilities = {};

	columnCounts.forEach(count => {
		// column count
		utilities[`.col-count-${e(count)}`] = {
			'column-count': count,
		};
	});

	// column fill
	columnFillValues.forEach(span => {
		utilities[`.col-fill-${e(span)}`] = {
			'column-fill': span,
		};
	});

	// column rule color
	Object.entries(configColors).forEach(([color, shades]) => {
		if (typeof shades === 'object') {
			Object.entries(shades).forEach(([shade, value]) => {
				utilities[`.col-rule-${e(color)}-${e(shade)}`] = {
					'column-rule-color': value,
				};
			});
		} else {
			utilities[`.col-rule-${e(color)}`] = {
				'column-rule-color': shades,
			};
		}
	});

	// column rule style
	borderStyles.forEach(style => {
		utilities[`.col-rule-${e(style)}`] = {
			'column-rule-style': style,
		};
	});

	// column rule width, numeric values
	Object.entries(configBorderWidths).forEach(([key, value]) => {
		utilities[`.col-rule-width-${e(key)}`] = {
			'column-rule-width': value,
		};
	});

	// column rule width, keywords
	columnRuleWidthValues.forEach(value => {
		utilities[`.col-rule-width-${e(value)}`] = {
			'column-rule-width': value,
		};
	});

	// column span
	columnSpanValues.forEach(span => {
		utilities[`.col-span-${e(span)}`] = {
			'column-span': span,
		};
	});

	// column width
	Object.entries(configSpacing).forEach(([key, value]) => {
		utilities[`.col-width-${e(key)}`] = {
			'column-width': value,
		};
	});
	
	// column gap
	Object.entries(configSpacing).forEach(([key, value]) => {
		utilities[`.col-gap-${e(key)}`] = {
			'column-gap': value,
		};
	});

	addUtilities(utilities, {
		variants,
	});
};

module.exports = multiColumnPlugin;
