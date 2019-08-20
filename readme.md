HW

create a form search with  country alpha3code

make an ajax get request to rest countries - by search of alpha3code

take the response and extract the languages array from the result country  - array of iso lang

find in the api the appropriate request (nested to the first 1) to achive all the countries that use the iterated languae

finally present on the UI the flags of the result countries from the languages get ajax requests

first query: search

second - for each on all the languages with : 

https://restcountries.eu/rest/v2/lang/CURRENT
dont forget to remove duplicates countries
use a state object to store all the result data and present it

