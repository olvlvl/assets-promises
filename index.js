"use strict";

/**
 * Creates a StyleSheet executor for a Promise instance.
 *
 * @param {string} url StyleSheet URL.
 *
 * @returns {Function}
 */
function createStyleSheetExecutor(url)
{
	return function (resolve, reject) {

		let element = document.createElement('link')

		element.setAttribute('rel', 'stylesheet')
		element.setAttribute('type', 'text/css')
		element.setAttribute('href', url)
		element.onload = () => resolve(url)
		element.onerror = () => reject(url)

		document.head.appendChild(element)

	}
}

/**
 * Creates a JavaScript executor for a Promise instance.
 *
 * @param {string} url JavaScript URL.
 *
 * @returns {Function}
 */
function createJavaScriptExecutor(url)
{
	return function (resolve, reject) {

		let element = document.createElement('script')

		element.setAttribute('src', url)
		element.onload = () => resolve(url)
		element.onerror = () => reject(url)

		document.head.appendChild(element)

	}
}

/**
 * Creates a promise to load a stylesheet.
 *
 * @param {string} url
 *
 * @returns {Promise}
 *
 * @constructor
 */
function StyleSheetPromise(url)
{
	return new Promise(createStyleSheetExecutor(url))
}

StyleSheetPromise.createExecutor = createStyleSheetExecutor

/**
 * Creates a promise to load a JavaScript.
 *
 * @param {string} url
 *
 * @returns {Promise}
 *
 * @constructor
 */
function JavaScriptPromise(url)
{
	return new Promise(createJavaScriptExecutor(url))
}

JavaScriptPromise.createExecutor = createJavaScriptExecutor

/**
 * Returns a promise that either resolves when all the stylesheets have been loaded or rejects
 * as soon as one of them fails to.
 *
 * @param {Array<string>}urls
 *
 * @returns {Promise}
 */
StyleSheetPromise.all = function (urls) {

	let promises = []

	urls.forEach((url) => promises.push(new StyleSheetPromise(url)))

	return Promise.all(promises)

}

/**
 * Returns a promise that either resolves when all the javascript have been loaded or rejects
 * as soon as one of them fails to.
 *
 * @param {Array<string>}urls
 *
 * @returns {Promise}
 */
JavaScriptPromise.all = function (urls) {

	let promises = []

	urls.forEach((url) => promises.push(new JavaScriptPromise(url)))

	return Promise.all(promises)

}

var exports

if ('undefined' !== typeof exports)
{
	exports.StyleSheetPromise = StyleSheetPromise
	exports.JavaScriptPromise = JavaScriptPromise
}
