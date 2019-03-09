define green
	@tput setaf 2; echo $1; tput sgr0;
endef

FB_APP=riskfactors-dev

.PHONY: local
local:
	cd dashboard; npm run build
	firebase serve --project $(FB_APP)
	$(call green,"[Done]")

.PHONY: deploy
deploy:
	firebase deploy --project $(FB_APP)
	$(call green,"[Done]")

