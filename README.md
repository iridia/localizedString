#	`iridia.localizedString`

Localized string support for JavaScript.  This library lives under the shared `iridia` namespace.  `iridia.localizedString` wants that you manually manage the language files (e.g. by loading them with `LABjs`) and these files will register the strings they understand with localizedString.  When you need a localized string, ask the system by `iridia.localizedString.stringForKey(theKey)`.  The default locale is always `en-us` by now.

This project works with `jQuery`, `JSClass`, and `monoArray`.





##	Usage





###	Main Application Initialization

	//	Set the preferred locales.  If unspecified, we’ll use what your user agent asks for as the first item, and en-US as the second item.

	iridia.localizedString.setPreferredLocales(["zh-TW", "en-US"]);
	
	
	//	Ask for a localized string, e.g. this function returns the string associated with the key {theKey} under category {theCategory}.

	iridia.localizedString.stringForKey("{theCategory}", "{theKey}");





###	Providing localizations

	iridia.localizedString.registerStrings(theCategoryName, theLocale, {
	
		theKey: theString,
		anotherKey: anotherString,
	
	});
	
	
	
	
	