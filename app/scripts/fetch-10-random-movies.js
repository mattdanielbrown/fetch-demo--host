

const targetUrl = 'https://mdb-fetch-demo-data.netlify.app/10-random-movies-static.json';
let fetchResponse;
let fetchResponseJson;
let fetchResponseData;
const fetchResultDisplay = document.getElementById('fetch-result');


const fetchData = () => {
	fetch(targetUrl)
		.then(response => {
			fetchResponse = response
			return response;
		})
		.then(response => {
			fetchResponseJson = response.json();
			return response.json();
		})
		.then(response => response.json())
		.then(data => {
			fetchResponseData = data;
			return data;
		})
		.then(data => console.log(data));
	
	fetchResultDisplay.innerText = fetchResponseJson;
};

/** Main Function Called When Page Finishes Loads / Is Ready **/
const main = () => {
	fetchData();
}

/** Script Runtime : Page-Load Finishes And Main Function Is Called **/
window.addEventListener('DOMContentLoaded', () => {
	main()
});