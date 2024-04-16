class ElementManager {

    constructor() {
        // created elements' registry 
        this.createdElementIds = []; // insertedElementIds
    }

    // for creating new elements
    createElement(
        type = 'div', 
        id = '', title = '', 
        referenceElId, 
        insertMode = 'insertAfter', 
        width = '', 
        html = ''
    ) {
        
        let el = document.getElementById(id);
    
        // create new element of type 'div'/'span'/etc.
        const newEl = el ?? document.createElement(type); // 'div'
        newEl.id = id; // 'wrapper'
        //newEl.className = classes; // 'wrapper-class'
        newEl.title = title; // 'Title'
    
        if (width !== '') {
            newEl.style.width = width;
        }
    
        // newEl.style.display = 'flex';
        const referenceEl = referenceElId ? document.getElementById(referenceElId) : null;
    
        if (insertMode === 'insertAfter' && referenceEl) {
            // insert new element after element with id referenceElId
            if (referenceEl.parentNode) {
                referenceEl.parentNode.insertBefore(newEl, referenceEl.nextSibling);
            }
        } else if (insertMode === 'appendTo' && referenceEl) {
            // append new element to element with id referenceElId
            referenceEl.appendChild(newEl);
        }
    
        if (html) {
            newEl.innerHTML = html;
        }

        // register element's ID
        this.createdElementIds.push(id);
    }

    // for removing previously created elements
    removeCreatedElements() {
        this.createdElementIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.parentNode.removeChild(element);
        });

        // clear created elements' registry after removal
        this.createdElementIds = [];
    }
}