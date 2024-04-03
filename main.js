// 'background.js' from https://developer.chrome.com/docs/extensions/mv3/getstarted/

let color = '#3aa757';
color = 'orange';
let onOrOff = 'on';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ onOrOff });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  /*console.log('Default onOrOff is set to', `${onOrOff}`);
    chrome.action.setBadgeText({
    text: "OFF",
  });*/
});