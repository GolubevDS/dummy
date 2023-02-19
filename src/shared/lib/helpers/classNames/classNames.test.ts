import { classNames } from './';

describe('classNames', () => {
	test('should return a string of class names', () => {
		const result = classNames(['foo', 'bar']);
		const expected = 'foo bar';
		expect(result).toBe(expected);
	});
	
	test('should handle an empty names array', () => {
		const result = classNames([]);
		expect(result).toBe('');
	});
	
	test('should add classes based on the mods object', () => {
		const result = classNames(['foo'], { 'bar': true, 'baz': false });
		const expected = 'foo bar';
		expect(result).toEqual(expected);
	});
});
