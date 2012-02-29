run:
	./node_modules/.bin/smoosh make build.json

install:
	npm install smoosh
	npm install markx

.PHONY: preview-site
