const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		// store res in variable
		// assert from match
		// asert text match
		// createdAt is a number
		const from = "me";
		const text = "text";
		let response = generateMessage(from, text);
		expect(response.text).toBe(text);
		expect(response.from).toBe(from);
		expect(typeof response.createdAt).toBe('number');

	})


})
