.PHONY: install
install:
	yarn

.PHONY: minimal
minimal:
	yarn build

.PHONY: deploy
deploy:
	yarn export

.PHONY: clean
clean:
	rm -rf node_modules
	rm -rf out
