/*
 * fetch.js (1.1.0)
 * ./app/scripts/fetch.js
 * Declarations, Defines, and Implements Fetch API Methods
 */
//==============================================================================

//------------------------------------------------------------------------------
// Variables
//------------------------------------------------------------------------------

const fetchTarget = 'http://example.com/movies.json';
let fetchResponse;
let fetchResponseJson;
let fetchResponseData;

//------------------------------------------------------------------------------
// Functions
//------------------------------------------------------------------------------

/** Fetch API Methods **/
// function fetchData() {
// 	fetch(fetchTarget)
// 		.then(response => {
// 			fetchResponse = response
// 			return response;
// 		})
// 		.then(response => {
// 			fetchResponseJson = response.json();
// 			return response.json();
// 		})
// 		.then(response => response.json())
// 		.then(data => {
// 			fetchResponseData = data;
// 			return data;
// 		})
// 		.then(data => console.log(data));
// }

/** Main Function Called When Page Finishes Loads / Is Ready **/
function main () {
	// fetchData();
}

/** Script Runtime : Page-Load Finishes And Main Function Is Called **/
window.addEventListener('DOMContentLoaded', () => {
	main();
});