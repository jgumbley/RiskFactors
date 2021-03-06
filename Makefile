define green
	@tput setaf 2; echo '\n';echo $1; tput sgr0;
endef

FB_APP=riskfactors-dev

functions/node_modules:
	cd functions; npm ci;
	cd dashboard; npm ci;
	cd acceptance; npm ci;

.PHONY: test
test: unit accept
	# Make sure everything works from the very top, to the bottom
	$(call green,"[All good 👍]")

.PHONY: unit
unit: functions/node_modules
	# 1. All the functions work as expected
	cd functions; npm test
	# 2. The UI components pass their lower layer tests
	cd dashboard; export CI=true; npm test --no-watch
	# 3. The datastore rules secure the system appropriately
	# TODO

.PHONY: accept
accept:
	# 4. Then (deploy?) and run the end to end tests
	cd acceptance; ./node_modules/.bin/cypress run

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

.PHONY: clean
clean:
	rm -Rf acceptance/node_modules
	rm -Rf dashboard/node_modules
	rm -Rf functions/node_modules
