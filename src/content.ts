//check whether the user has activated the extension
chrome.storage.sync.get('state', async (data) => {
    const noThemeActive = document.body.classList.contains('skin-vector-legacy');

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
        const path = chrome.runtime.getURL('style.css');
        const result = await fetch(path);
        const css = await result.text();

        //insert the CSS into the HTML document head
        document.querySelector('head')?.insertAdjacentHTML('beforeend', `<style>${css}</style>`);
    } catch (error) {
        console.warn(error);
    }
}

//correct scroll behavior when jumping to anchors
window.addEventListener('hashchange', () => {
    const firstHeading: HTMLElement | null = document.querySelector('#firstHeading');
    window.scrollBy(0, -(firstHeading?.offsetHeight ?? 0));
});
