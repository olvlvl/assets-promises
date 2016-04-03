test: node_modules
	./node_modules/.bin/mocha --reporter spec

node_modules:
	npm install

.PHONY: test
