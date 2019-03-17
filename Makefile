define green
	@tput setaf 2; echo '\n';echo $1; tput sgr0;
endef

FB_APP=riskfactors-dev

.PHONY: test
test:
	# Make sure everything works from the very top, to the bottom
	# 1. All the functions work as expected
	cd functions; npm test
	# 2. The UI components pass their lower layer tests
	# 3. The datastore rules secure the system appropriately
	# 4. Then (deploy?) and run the end to end tests
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
