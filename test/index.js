"use strict";

require('chai').should()
let assetPromises = require('../index')

describe('#stylesheet', () => {

	it("loads a stylesheet", function () {

		let stylesheet = "http://www.csszengarden.com/215/215.css"
		let p = assetPromises.StyleSheetPromise(stylesheet)

		p.then((result) => {

			expect(result).to.equal(stylesheet)

		})

	})

})
