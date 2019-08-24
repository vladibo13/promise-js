const state = {};

function init() {
	$('#search-btn').on('click', searchAction);
}

function searchAction() {
	const code = $('#search-input').val();
	api
		.getContryByCode(code)
		.then((res) => {
			const currentCountry = { ...res, languages: res.languages.map((c) => c.iso639_1) };
			state[code] = { country: currentCountry };
			getAllLanguagesByCode(currentCountry.languages, code);
		})
		.catch((e) => console.log(e));
}

function getAllLanguagesByCode(languages, code) {
	const promises = languages.map((lang3Code) => api.getCountryByLanguage(lang3Code));
	Promise.all(promises)
		.then((nestedCountriesArray) => {
			const mergedCounties = nestedCountriesArray.reduce((initArray, currentCountry) => {
				return [ ...initArray, ...currentCountry ];
			}, []);

			const filteredCountries = mergedCounties.reduce((initObj, currentCountry) => {
				return { ...initObj, [currentCountry.name]: currentCountry.flag };
			}, {});

			state[code].flgas = filteredCountries;
			draw(filteredCountries);
		})
		.catch((e) => console.log(e));
}

function draw(flags) {
	Object.entries(flags).map(([ key, value ]) => {
		const clonedCard = $('#cardCountry').clone();
		clonedCard.find('img').attr({ src: value });
		clonedCard.css({ display: 'inline-block' });
		clonedCard.find('#title').html(key);
		$('#main').append(clonedCard);
	});
}

init();
