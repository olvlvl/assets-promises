# Assets Promises

This package provides [promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) to load stylesheet and JavaScript assets.

Stylesheet and JavaScript assets are loaded using `link` and `script` tags respectively. Your
browser needs to support the `load` and `error` events on these tags, you can check that using
[Ryan Grove's tester](https://pie.gd/test/script-link-events/).

### Usage

The following example demonstrates how to load a stylesheet:

```javascript
"use strict";

var StyleSheetPromise = require('olvlvl-assets-promises').StyleSheetPromise
var url = "http://www.csszengarden.com/215/215.css"

new StyleSheetPromise(url).then(url => {

	console.log('Stylesheet resolved:', url)

}).catch(url => {

	console.log('Stylesheet rejected:', url)

})
```

The following promise should fail because the URL cannot be resolved.

```javascript
"use strict";

var url = "http://" + Math.random() + "/" + Math.random() + ".css"

new StyleSheetPromise(url).catch(url => {

	console.log('rejected:', url)

})
```

The following example demonstrates how to load a JavaScript file:

```javascript
"use strict";

var JavaScriptPromise = require('olvlvl-assets-promises').JavaScriptPromise
var url = "https://ajax.googleapis.com/ajax/libs/threejs/r69/three.min.js"

new JavaScriptPromise(url).then(url => {

	console.log('JavaScript resolved:', url)

}).catch(url => {

	console.log('JavaScript rejected:', url)

})
```

The following example demonstrates how to load multiple stylesheets:

```javascript
"use strict";

var StyleSheetPromise = require('olvlvl-assets-promises').StyleSheetPromise

var stylesheets = [

	"http://www.csszengarden.com/215/215.css",
	"http://www.csszengarden.com/214/214.css",
	"http://www.csszengarden.com/213/213.css"

]

StyleSheetPromise.all(stylesheets).then(urls => {

	console.log('stylesheets resolved:', urls)

}).catch(urls => {

	console.log('stylesheets rejected:', urls)

})
```

The following example demonstrates how to load multiple Javascript:

```javascript
"use strict";

var JavaScriptPromise = require('olvlvl-assets-promises').JavaScriptPromise

var javascripts = [

	"https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js",
	"https://ajax.googleapis.com/ajax/libs/threejs/r69/three.min.js",
	"https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"

]

JavaScriptPromise.all(javascripts).then(urls => {

	console.log('javascript resolved:', urls)

}).catch(urls => {

	console.log('javascript rejected:', urls)

})
```

The following example demonstrates how to load multiple Stylesheets and JavaScript:

```javascript
"use strict";

var StyleSheetPromise = require('olvlvl-assets-promises').StyleSheetPromise
var JavaScriptPromise = require('olvlvl-assets-promises').JavaScriptPromise

var stylesheets = [

	"http://www.csszengarden.com/215/215.css",
	"http://www.csszengarden.com/214/214.css",
	"http://www.csszengarden.com/213/213.css"

]

var javascripts = [

	"https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js",
	"https://ajax.googleapis.com/ajax/libs/threejs/r69/three.min.js",
	"https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"

]

Promise.all([ 

	StyleSheetPromise.all(stylesheets), 
	JavaScriptPromise.all(javascripts)

]).then((stylesheets, javascripts) => {

	console.log('resolved:', stylesheets, javascripts)

}).catch((stylesheets, javascripts) => {

	console.log('rejected:', stylesheets, javascripts)

})
```





----------

## Requirement

ECMAScript 6, `load` and `error` events on `link` and `script` elements.





## Installation

The recommended way to install the package in through [npm](https://www.npmjs.com/):

```
$ npm install olvlvl-assets-promises --save
```





## Cloning the repository

The package is [available on GitHub](https://github.com/olvlvl/assets-promises), its repository can be cloned with the following command line:

$ git clone https://github.com/olvlvl/assets-promises.git






## Testing

I don't know how to test this using nodejs because I it's using browser features, so I included a `index.html` file to check if things are working as expected.





## License

**olvlvl-assets-promise** is licensed under the New BSD License - See the [LICENSE](LICENSE) file for details.