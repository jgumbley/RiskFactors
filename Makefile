define green
	@tput setaf 2; echo $1; tput sgr0;
endef

FB_APP=riskfactors-dev

.PHONY: test
test:
	$(call green,"[All good 👍]")


.PHONY: install
install:
	cd dashboard; npm install
	cd functions; npm install
	$(call green,"[Done]")

.PHONY: local
local:
	cd dashboard; npm start

.PHONY: prodlocal
prodlocal:
	cd dashboard; npm run build
	firebase serve --project $(FB_APP)

.PHONY: deploy
deploy:
	firebase deploy --project $(FB_APP)
	$(call green,"[Done]")

.PHONY: cypress
cypress:
	cd dashboard; ./node_modules/.bin/cypress open
