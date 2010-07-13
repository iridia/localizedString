//	lib.irLocalizedString.js
//	Evadne Wu at Iridia Productions, 2010





if (iridia === undefined) var iridia = {};





iridia.localizedString = new JS.Singleton({
	
	
	initialize: function () {

		this._storage = {};
		this._defaultLocale = "en";
		
		this.setPreferredLocale(navigator.language);
	
	},
	
	
	setPreferredLocale: function (inLocale) {
	
		if (inLocale.hasOwnProperty("length")) {
			
			var thisObject = this;
			
			thisObject._preferredLocales = [];
		
			$.each(inLocale, function (indexOfLocale, localeToPush) {
			
				thisObject._preferredLocales.pushIfNotEmpty(String(localeToPush));
			
			});
			
			this._preferredLocales = thisObject._preferredLocales.makeUnique();
		
		} else {
		
			this._preferredLocales = [String(inLocale), "en"].makeUnique();
		
		}
	
	},
	
	
	registerStrings: function (inCategoryName, inLocale, inStringsObject) {
	
		if (typeof inCategoryName != "string") return;
		if (typeof inLocale != "string") return;
		if (typeof inStringsObject != "object") return;
	
		
		if (!this._storage.hasOwnProperty(inCategoryName))
		this._storage[inCategoryName] = {};
	
		if (!this._storage[inCategoryName].hasOwnProperty(inLocale))
		this._storage[inCategoryName][inLocale] = {};
		
		$.each(inStringsObject, function (inKeyOfString, inLocalizedString) {
		
			this._storage[inCategoryName][inLocale][inKeyOfString] = String(inLocalizedString);
		
		});
	
	},
	
	
	stringForKey: function (inCategoryName, inStringKey) {
	
		if (typeof inCategoryName != "string") return undefined;
		if (typeof inStringKey != "string") return undefined;
	
		if (this._storage[inCategoryName] === undefined) return undefined;
		
		var responseString = undefined;
		var thisObject = this;
		
		$.each(thisObject.preferredLocales, function (indesOfLocale, localeToQuery) {
		
			if (thisObject._storage[inCategoryName][localeToQuery] === undefined) return true;
			
			if (thisObject._storage[inCategoryName][localeToQuery][inStringKey] === undefined) return true;
			
			responseString = thisObject._storage[inCategoryName][localeToQuery][inStringKey];
			
			return false;
		
		});
		
		return responseString;
	
	}


});









