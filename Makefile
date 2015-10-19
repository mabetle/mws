
MWS_DIR=$(GOPATH)/src/github.com/mabetle/mws
CSS_DIR=$(MWS)/public/css

mps-usage:
	echo "make serv-python | link"

serve-python:
	sudo python -m SimpleHTTPServer 80
	
	
mps-link:
	sudo ln -sTf /home/korbenzhang/dev/github.com/mabetle/mps /public

css-merge:
	$(MWS_DIR)/merge-css.sh
