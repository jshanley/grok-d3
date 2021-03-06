clean:
	rm -rf output

compile:
	nanoc compile

build: clean compile

see: build
	nanoc view

deploy: build
	git subtree push --prefix output origin gh-pages
