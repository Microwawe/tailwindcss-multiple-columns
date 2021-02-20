const [toIncludeCss, toNotIncludeCss, generatePluginCss] = require('./helpers');

expect.extend({
	toIncludeCss: toIncludeCss,
	toNotIncludeCss: toNotIncludeCss,
});

let css;

beforeAll(async () => {
	css = await generatePluginCss();
});

describe('Column', () => {
	describe('Column count', () => {
		it('should have the default values', () => {
			expect(css).toIncludeCss([
				`.col-count-auto {column-count: auto}`,
				`.col-count-1 {column-count: 1}`,
				`.col-count-2 {column-count: 2}`,
				`.col-count-3 {column-count: 3}`,
				`.col-count-4 {column-count: 4}`,
			]);
		});

		it('should not the have made up values', () => {
			expect(css).toNotIncludeCss([
				`.col-count {column-count: 0}`,
				`.col-count-5 {column-count: 5}`,
			]);
		});
	});

	describe('Column fill', () => {
		it('should have the default values', () => {
			expect(css).toIncludeCss([
				`.col-fill-auto {column-fill: auto}`,
				`.col-fill-balance {column-fill: balance}`,
				`.col-fill-balance-all {column-fill: balance-all}`,
				`.col-fill-inherit {column-fill: inherit}`,
				`.col-fill-initial {column-fill: initial}`,
				`.col-fill-unset {column-fill: unset}`,
			]);
		});

		it('should not the have made up values', () => {
			expect(css).toNotIncludeCss([
				`.col-fill-test {column-fill: test}`,
				`.col-fill-1 {column-fill: 1}`,
				`.col-fill-none {column-fill: none}`,
			]);
		});
	});

	describe('Column width', () => {
		it('should have the default column width values', () => {
			expect(css).toIncludeCss([
				`.col-width-0 {column-width: 0px}`,
				`.col-width-1 {column-width: 0.25rem}`,
				`.col-width-2 {column-width: 0.5rem}`,
				`.col-width-3 {column-width: 0.75rem}`,
				`.col-width-4 {column-width: 1rem}`,
				`.col-width-5 {column-width: 1.25rem}`,
				`.col-width-6 {column-width: 1.5rem}`,
				`.col-width-7 {column-width: 1.75rem}`,
				`.col-width-8 {column-width: 2rem}`,
				`.col-width-9 {column-width: 2.25rem}`,
				`.col-width-10 {column-width: 2.5rem}`,
				`.col-width-11 {column-width: 2.75rem}`,
				`.col-width-12 {column-width: 3rem}`,
				`.col-width-14 {column-width: 3.5rem}`,
				`.col-width-16 {column-width: 4rem}`,
				`.col-width-20 {column-width: 5rem}`,
				`.col-width-24 {column-width: 6rem}`,
				`.col-width-28 {column-width: 7rem}`,
				`.col-width-32 {column-width: 8rem}`,
				`.col-width-36 {column-width: 9rem}`,
				`.col-width-40 {column-width: 10rem}`,
				`.col-width-44 {column-width: 11rem}`,
				`.col-width-48 {column-width: 12rem}`,
				`.col-width-52 {column-width: 13rem}`,
				`.col-width-56 {column-width: 14rem}`,
				`.col-width-60 {column-width: 15rem}`,
				`.col-width-64 {column-width: 16rem}`,
				`.col-width-72 {column-width: 18rem}`,
				`.col-width-80 {column-width: 20rem}`,
				`.col-width-96 {column-width: 24rem}`,
				`.col-width-px {column-width: 1px}`,
				`.col-width-0\\.5 {column-width: 0.125rem}`,
				`.col-width-1\\.5 {column-width: 0.375rem}`,
				`.col-width-2\\.5 {column-width: 0.625rem}`,
				`.col-width-3\\.5 {column-width: 0.875rem}`,
			]);
		});

		it('should not the have made up values', () => {
			expect(css).toNotIncludeCss([
				`.col-width-15 {column-width: 3.25rem}`,
				`.col-width-30 {column-width: 7.5rem}`,
				`.col-width-100 {column-width: 25rem}`,
			]);
		});
	});

	describe('Column gap', () => {
		it('should have the default values', () => {
			expect(css).toIncludeCss([
				`.col-gap-0 {column-gap: 0px}`,
				`.col-gap-1 {column-gap: 0.25rem}`,
				`.col-gap-2 {column-gap: 0.5rem}`,
				`.col-gap-3 {column-gap: 0.75rem}`,
				`.col-gap-4 {column-gap: 1rem}`,
				`.col-gap-5 {column-gap: 1.25rem}`,
				`.col-gap-6 {column-gap: 1.5rem}`,
				`.col-gap-7 {column-gap: 1.75rem}`,
				`.col-gap-8 {column-gap: 2rem}`,
				`.col-gap-9 {column-gap: 2.25rem}`,
				`.col-gap-10 {column-gap: 2.5rem}`,
				`.col-gap-11 {column-gap: 2.75rem}`,
				`.col-gap-12 {column-gap: 3rem}`,
				`.col-gap-14 {column-gap: 3.5rem}`,
				`.col-gap-16 {column-gap: 4rem}`,
				`.col-gap-20 {column-gap: 5rem}`,
				`.col-gap-24 {column-gap: 6rem}`,
				`.col-gap-28 {column-gap: 7rem}`,
				`.col-gap-32 {column-gap: 8rem}`,
				`.col-gap-36 {column-gap: 9rem}`,
				`.col-gap-40 {column-gap: 10rem}`,
				`.col-gap-44 {column-gap: 11rem}`,
				`.col-gap-48 {column-gap: 12rem}`,
				`.col-gap-52 {column-gap: 13rem}`,
				`.col-gap-56 {column-gap: 14rem}`,
				`.col-gap-60 {column-gap: 15rem}`,
				`.col-gap-64 {column-gap: 16rem}`,
				`.col-gap-72 {column-gap: 18rem}`,
				`.col-gap-80 {column-gap: 20rem}`,
				`.col-gap-96 {column-gap: 24rem}`,
				`.col-gap-px {column-gap: 1px}`,
				`.col-gap-0\\.5 {column-gap: 0.125rem}`,
				`.col-gap-1\\.5 {column-gap: 0.375rem}`,
				`.col-gap-2\\.5 {column-gap: 0.625rem}`,
				`.col-gap-3\\.5 {column-gap: 0.875rem}`,
			]);
		});

		it('should not the have made up values', () => {
			expect(css).toNotIncludeCss([
				`.col-gap-test {column-gap: test}`,
				`.col-gap-1 {column-gap: 1}`,
				`.col-gap-none {column-gap: none}`,
			]);
		});
	});
});

describe('Column rule', () => {
	describe('Column rule colors', () => {
		it('should have the default values', () => {
			expect(css).toIncludeCss([
				`.col-rule-black {column-rule-color: #000}`,
				`.col-rule-white {column-rule-color: #fff}`,
			]);
		});
	});

	describe('Column rule styles', () => {
		it('should have the default values', () => {
			expect(css).toIncludeCss([
				`.col-rule-none {column-rule-style: none}`,
				`.col-rule-hidden {column-rule-style: hidden}`,
				`.col-rule-dotted {column-rule-style: dotted}`,
				`.col-rule-dashed {column-rule-style: dashed}`,
				`.col-rule-solid {column-rule-style: solid}`,
				`.col-rule-double {column-rule-style: double}`,
				`.col-rule-groove {column-rule-style: groove}`,
				`.col-rule-ridge {column-rule-style: ridge}`,
				`.col-rule-inset {column-rule-style: inset}`,
				`.col-rule-outset {column-rule-style: outset}`,
			]);
		});
	});

});
