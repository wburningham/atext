.PHONY: publish, gen

default: publish
	
publish:
	git add corrections.txt && git commit -m "updating corrections" && git push origin master

gen:
	./gen.sh