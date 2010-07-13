#	`iridia.localizedString`

Localized string support for JavaScript.  This library lives under the shared `iridia` namespace.  `iridia.localizedString` wants that you manually manage the language files (e.g. by loading them with `LABjs`) and these files will register the strings they understand with localizedString.  When you need a localized string, ask the system by `iridia.localizedString.stringForKey(theKey)`.

This project works with `jQuery`, `JSClass`, and `monoArray`.





##	Using (Examples)

###	Main Application Initialization

	//	Set the preferred locales.  If unspecified, we’ll use what your user agent asks for as the first item, and en-US as the second item.

	iridia.localizedString.setPreferredLocales(["zh-TW", "en-US"]);
	
	
	//	Ask for a localized string

	iridia.localizedString.stringForKey("{theCategory}", "{theKey}");
	//	returns the string associated with the key {theKey} under category {theCategory}.





###	Providing localizations

	iridia.localizedString.registerStrings(theCategoryName, theLocale, {
	
		theKey: theString,
		anotherKey: anotherString,
	
	});
	
	
	
	
	