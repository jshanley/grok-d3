clean:
	rm -rf output

compile:
	nanoc compile

build: clean compile

deploy: build
	git subtree push --prefix output origin gh-pages
