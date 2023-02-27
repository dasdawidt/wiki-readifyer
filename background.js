//show current state on start
chrome.runtime.onStartup.addListener(() => {
    showExtensionState();
})

//let the user change the state by clicking the icon
chrome.action.onClicked.addListener((tab) => {
	switchExtensionState();
});

//switch the extension state
function switchExtensionState() {
	chrome.storage.sync.get('state', (data) => {
		if (data.state === 'on') {
			chrome.storage.sync.set({state: 'off'});
		} else {
			chrome.storage.sync.set({state: 'on'});
		}
		showExtensionState();
	});
}

//show the state by changing the icon
function showExtensionState() {
	chrome.storage.sync.get('state', (data) => {
		if (data.state === 'on') {
			chrome.action.setIcon({path: {
					"128": "images/enabled_128.png"
				}
			});
		} else {
			chrome.action.setIcon({path: {
					"128": "images/disabled_128.png"
				}
			});
		}
	})
}