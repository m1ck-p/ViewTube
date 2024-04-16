document.addEventListener('DOMContentLoaded', function() {

    // extension's on/off button
    const toggleButton = document.getElementById('toggle-button');
  
    // toggle state from storage when popup/button is opened
    chrome.storage.sync.get('isExtensionEnabled', function(data) {
      //toggleButton.textContent = data.extensionEnabled ? 'Disable Extension' : 'Enable Extension';
      styleToggleButton(toggleButton, data.isExtensionEnabled);
    });

    toggleButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'toggle' }, (response) => {
            // toggleButton.textContent = response.extensionEnabled ? 'Disable Extension' : 'Enable Extension';
            styleToggleButton(toggleButton, response.isExtensionEnabled);

            // get current tab and send message to content.js
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "doToggleExtension", enabled: response.isExtensionEnabled });
            });
        });
    });

    function styleToggleButton(toggleButton, newToggleState) {
        const btnText = newToggleState ? 'Disable Extension' : 'Enable Extension';
        const btnClass = 'go-btn-active';
        const hasBtnClass = !newToggleState;

        // document.querySelector('html').classList.add('html-go-btn-active');
        toggleButton.textContent = btnText;
        toggleButton.textContent = hasBtnClass ? toggleButton.classList.remove(btnClass) : toggleButton.classList.add(btnClass);

    }

    function doToggleExtension() {
      // logic to toggling the extension's state
      console.log('+++ Extension state toggled');
    }
});
