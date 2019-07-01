.PHONY: publish, gen

default: publish
	
publish:
	git add corrections.txt && git commit -m "updating corrections" && git push origin master

gen:
	./gen.sh

alfred:
	bash -l -c 'nvm use' && rm -f corrections.alfredsnippets && node alfredsnippets.js && open corrections.alfredsnippets