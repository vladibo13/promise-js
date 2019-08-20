const config = {
	codeURL: 'https://restcountries.eu/rest/v2/alpha'
};

$(function() {
	$('#search-btn').on('click', () => {
		const alpha3Code = $('#search-input').val();
		getCountryByCode(alpha3Code)
			.then((res) => {
				return res;
			})
			.then((languages) => getAllLanguagesByIso(languages))
			.catch((e) => console.log(e));
	});
});

function getAllLanguagesByIso(countries) {
	const { languages } = countries;
	languages.filter((item) => item.iso639_1).forEach((item) => console.log(item.iso639_1));
}

function getCountryByCode(countryCode) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `${config.codeURL}/${countryCode}`,
			method: 'GET',
			success: function(country) {
				resolve(country);
			},
			error: function(e) {
				reject(e);
			}
		});
	});
}
