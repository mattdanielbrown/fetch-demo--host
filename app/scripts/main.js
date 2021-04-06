/*
 * main.js (1.1.0)
 * ./app/scripts/main.js
 * Main javascript file called by each page (or at least index.html)
 */
//==============================================================================

/** Main Function Called When Page Finishes Loads / Is Ready **/
function main() {
	console.log('DOM fully loaded and parsed');
	
	const navigationMenuButton = document.getElementById('nav-menu-button');
	const navigationMenuList = document.querySelector('nav ul');
	
	navigationMenuButton.addEventListener('click', function () {
		if (navigationMenuButton.classList.contains('toggled')) {
			navigationMenuButton.classList.remove('toggled');
			navigationMenuList.classList.remove('toggled');
		} else {
			navigationMenuButton.classList.add('toggled');
			navigationMenuList.classList.add('toggled');
		}
	});
	navigationMenuButton.addEventListener('animationstart', function () {
		this.style.pointerEvents = 'none';
	});
	navigationMenuButton.addEventListener('animationend', function () {
		this.style.pointerEvents = 'inital';
	})
}

/** Script Runtime : Page-Load Finishes And Main Function Is Called **/
window.addEventListener('DOMContentLoaded', () => {
	main();
});