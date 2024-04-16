// for creating/removing DOM elements needed for displaying visualization
const elementManager = new ElementManager();

// check extension's state ('enabled/disabled') stored in chrome.storage
chrome.storage.sync.get('isExtensionEnabled', function(data) {
    createOrRemoveElements(data.isExtensionEnabled);
});

// listen for messages from popup.js or background.js
// -> per se optional, but useful here, since the extension can be toggled without reloading the page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'doToggleExtension') { // toggleExtensionState
        createOrRemoveElements(request.enabled);
    }
});

function extractLikes(input) {

    // regex matching words (patterns separated by ' ') consisting only of numeric values
    const numericWordRegex = /\b\d+[\.,]?\d*\b/; // /\b\d+\b/;

    // get first match
    const match = input.match(numericWordRegex);

    // extract numeric value from match
    const numericVal = match && match[0];

    // remove decimal separator if present and return result
    const result = numericVal && numericVal.replace(/[,\.]/g, '');

    // return matched string or null if no match found
    return result;
}

function extractViews(input) {

    // regex matching word directly preceeding word 'view' or 'views'
    const numericWordRegex = /(?:\b)(\d+[\.,]?\d*)(?=\s+(?:view[s]?)\b)/i;

    // get first match
    const match = input.match(numericWordRegex);

    if (match) {
        
        // extract numeric value from match
        const numericVal = match[1];

        // remove decimal separator if present and return result
        const result = numericVal.replace(/[,\.]/, '');

        return result;
    } else {
        // no match found
        return null;
    }
}

function createOrRemoveElements(isEnabled) {

    /*  as per now, the area displaying amount of likes is at the video's "like" button.
        however, css classes and structure have changed (and likely will keep doing so, which is this plugin's greatest flaw)
        '.view-count' -> '.yt-spec-button-view-model'
        'yt-formatted-string[aria-label*="like"]' -> '.yt-spec-button-view-model > button[aria-label*="like this video along with"]'
    */

    // DOM element to retrieve likes from
    let likeButtonClassName = '.yt-spec-button-view-model'; // '.view-count'
    let likeButtonAreaLabelInfo = likeButtonClassName + ' > button[aria-label*="like this video along with"]'; // 'yt-formatted-string[aria-label*="like"]'

    // DOM element to retrieve views from
    let viewInfoClassName = 'tp-yt-paper-tooltip.ytd-watch-info-text'; // 'tp-yt-paper-tooltip.ytd-watch-info-text #tooltip.tp-yt-paper-tooltip';
    let viewInfoText = viewInfoClassName + ' #tooltip.tp-yt-paper-tooltip';

    // DOM element to append views-to-likes ratio viz to
    let appendPercentWrapperTo = 'top-row'; // '#info-contents' // 'segmented-like-dislike-button-view-model'

    if (document.querySelectorAll(likeButtonClassName).length && document.querySelectorAll(viewInfoClassName).length) {

        // get views
        let viewsText = document.querySelectorAll(viewInfoText)[0].textContent;
        let views = extractViews(viewsText);

        // get likes
        let likesText = document.querySelectorAll(likeButtonAreaLabelInfo)[0].getAttribute('aria-label'); 
        let likes = extractLikes(likesText);
        
        if (views && likes) {
            console.debug(`+++ Views: ${views}. Likes: ${likes}. `);
        } else if (views) {
            console.debug(`+++ Views: ${views}. No Likes.`);
        } else if (likes) {
            console.debug(`+++ Likes: ${likes}. No Views.`);
        } else {
            console.debug(`+++ No Views and no Likes.`);
        }

        let ratio = (views === 0) ? 0 : likes / views;
        let percent = (ratio*100).toFixed(2);
        let percentVal = percent + '%'; // todo
        let percentText = percentVal + ' of likes';
        let percentViews = 100 - percent;
        let percentViewsCssVal = percentViews + '%';

        
        if (isEnabled) {
            // create the needed elements

            elementManager.createElement(
                'div',
                'percent-wrapper',
                'Likes to views ratio display',
                appendPercentWrapperTo,
                'insertAfter'
            );

            elementManager.createElement(
                'div',
                'percent-bar',
                'Likes to views ratio display',
                'percent-wrapper',
                'appendTo'
            );

            elementManager.createElement(
                'div',
                'percent-bar-likes',
                'Likes to views ratio display',
                'percent-bar',
                'appendTo',
                percentVal
            );

            elementManager.createElement(
                'div',
                'percent-bar-views',
                'Likes to views ratio display',
                'percent-bar',
                'appendTo',
                percentViewsCssVal
            );

            elementManager.createElement(
                'div',
                'percent-text',
                'Likes to views ratio display',
                'percent-wrapper',
                'appendTo',
                '',
                percentText
            );

        } else {
            // remove the needed elements
            elementManager.removeCreatedElements();
        }

    } else {
        console.debug(`+++ No DOM element with class ${likeButtonClassName} found.`);
    }
}