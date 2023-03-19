import { classNames } from './';

describe('classNames', () => {
	it('should return an empty string if no arguments are passed', () => {
		const result = classNames();
		expect(result).toBe('');
	});
	
	it('should return a string with a single class name', () => {
		const result = classNames(['foo']);
		expect(result).toBe('foo');
	});
	
	it('should return a string with multiple class names', () => {
		const result = classNames(['foo', 'bar', 'baz']);
		expect(result).toBe('foo bar baz');
	});
	
	it('should return a string with modified class names', () => {
		const result = classNames(['foo', 'bar'], { baz: true, qux: false });
		expect(result).toBe('foo bar baz');
	});
	
	it('should handle empty object values', () => {
		const result = classNames(['foo', 'bar'], {});
		expect(result).toBe('foo bar');
	});
	
	it('should handle values with boolean false', () => {
		const result = classNames(['foo', 'bar'], { baz: false, qux: false });
		expect(result).toBe('foo bar');
	});
	
	it('should handle values with numbers', () => {
		const result = classNames(['foo', 'bar'], { 1: true, 2: false, 3: true });
		expect(result).toBe('foo bar 1 3');
	});
	
	it('should handle values with empty strings', () => {
		const result = classNames(['foo', 'bar'], { '': true });
		expect(result).toBe('foo bar ');
	});
});
