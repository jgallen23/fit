build:
	./node_modules/.bin/masher mash.yaml

install:
	npm install masher

.PHONY: build install
