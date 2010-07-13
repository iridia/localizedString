//	lib.irLocalizedString.js
//	Evadne Wu at Iridia Productions, 2010





if (iridia === undefined) var iridia = {};





iridia.localizedString = new JS.Singleton({
	
	
	initialize: function () {

		this._storage = {};
		this._defaultLocale = "en-us";
		
		this.setPreferredLocale(navigator.language || this._defaultLocale)
		
		if (iridia.presets !== undefined)
		if (iridia.presets.localizedString !== undefined)
		this.setPreferredLocale(iridia.presets.localizedString.preferredLocales);
	
	},
	
	
	setPreferredLocale: function (inLocale) {
	
		if (inLocale === undefined) mono.die(mono.error("iridia.localizedString was passed an undefiend locale, bailing."));
	
		if (inLocale instanceof Array) {
			
			var thisObject = this;
			
			thisObject._preferredLocales = [];
		
			$.each(inLocale, function (indexOfLocale, localeToPush) {
			
				thisObject._preferredLocales.pushIfNotEmpty(String(localeToPush).toLowerCase());
			
			});
			
			this._preferredLocales = thisObject._preferredLocales.makeUnique();
		
		} else {
		
			this._preferredLocales = [String(inLocale).toLowerCase(), "en"].makeUnique();
		
		}
	
	},
	
	
	registerStrings: function (inCategoryName, inLocale, inStringsObject) {
	
		if (typeof inCategoryName != "string") return;
		
		if (typeof inLocale != "string") return;
		inLocale = inLocale.toLowerCase();
		
		if (typeof inStringsObject != "object") return;
	
		
		if (!this._storage.hasOwnProperty(inCategoryName))
		this._storage[inCategoryName] = {};
	
		if (!this._storage[inCategoryName].hasOwnProperty(inLocale))
		this._storage[inCategoryName][inLocale] = {};
		
		var thisObject = this;
		
		$.each(inStringsObject, function (inKeyOfString, inLocalizedString) {
		
			thisObject._storage[inCategoryName][inLocale][inKeyOfString] = String(inLocalizedString);
		
		});
	
	},
	
	
	stringForKey: function (inCategoryName, inStringKey) {
	
		if (typeof inCategoryName != "string") return undefined;
		if (typeof inStringKey != "string") return undefined;
	
		if (this._storage[inCategoryName] === undefined) return undefined;
		
		var responseString = undefined;
		var thisObject = this;
		
		$.each(thisObject._preferredLocales, function (indexOfLocale, localeToQuery) {
				
			if (thisObject._storage[inCategoryName][localeToQuery] === undefined) return true;
			
			if (thisObject._storage[inCategoryName][localeToQuery][inStringKey] === undefined) return true;
			
			responseString = thisObject._storage[inCategoryName][localeToQuery][inStringKey];
			
			return false;
		
		});
		
		return responseString;
	
	}


});









