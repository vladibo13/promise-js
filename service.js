const config = {
	alpha3CodeURL: 'https://restcountries.eu/rest/v2/alpha',
	languageURL: 'https://restcountries.eu/rest/v2/lang'
};

const api = {
	getContryByCode: (code) => {
		return $.ajax({
			url: `${config.alpha3CodeURL}/${code}`,
			method: 'get'
		});
	},

	getCountryByLanguage: (lang) => {
		return $.ajax({
			url: `${config.languageURL}/${lang}`,
			method: 'get'
		});
	}
};
