//check whether the user has activated the extension
chrome.storage.sync.get('state', async (data) => {
    let noThemeActive = document.body.classList.contains('skin-vector-legacy');
	if (noThemeActive && data.state === 'on') {
		await inject();

		//trigger a resize event so that wikipedia's js recalculates the top menu
		window.dispatchEvent(new Event('resize'));
	}
});

//inject CSS
async function inject() {
	try {
		//get the content of the CSS file
		let path = chrome.runtime.getURL('styles/style.css');
		let result = await fetch(path);
		let css = await result.text();

		//insert the CSS into the HTML document head
		document.querySelector('head').insertAdjacentHTML('beforeend', '<style>' + css + '</style>');
	} catch (error) {
		console.warn(error);
	}
}

//correct scroll behavior when jumping to anchors
window.addEventListener('hashchange', () => {
    window.scrollBy(0, -document.querySelector("#firstHeading").offsetHeight)
});