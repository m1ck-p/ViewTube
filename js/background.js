let isExtensionEnabled = false; // default state

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isExtensionEnabled });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggle') { // 'doToggleExtension' / 'toggle'
    isExtensionEnabled = !isExtensionEnabled;
    chrome.storage.sync.set({ isExtensionEnabled });
    sendResponse({ isExtensionEnabled });
  }
});