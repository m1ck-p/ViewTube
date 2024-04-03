jQuery(document).ready(function($) {

    // Initialize button with user's preferred color
    let goButton = document.getElementById('changeColor');
    let html = document.querySelector('html');

    chrome.storage.sync.get('color', ({ color }) => {
      goButton.style.backgroundColor = color;
      // console.log('la');

      /* test */
      
      /**
     * Utility function to add CSS in multiple passes.
     * @param {string} styleString
     */
    
    /* function addStyle(styleString) {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    } */
    
    /* css */

    /* addStyle(`
      body {
        color: red;
      }
    `);

    addStyle(`
      body {
        background: silver;
      }
    `);

    addStyle(`
      .a-box.shipment.shipment-is-delivered.returnable-wrapper::before {
        position: absolute;
        transform: translate(-100%);
        font-size: 18px !important;
        line-height: 24px!important;
        padding: 14px 18px;
        background: cornflowerblue;
        color: red !important;
      }
    `); */

    /* -css */

    /* -test */
      
    });

    let isOn = false;
    
    let isOnOrOff = '';
    
    // chrome.storage.sync.get(['onOrOff'], async function(result) {
    chrome.storage.sync.get('onOrOff', ({ onOrOff }) => {
        
        // const thisTabId = getTabId();
        
        console.log('onOrOff: ' + onOrOff);
        
        if (onOrOff === 'on') {
            isOnOrOff = 'on';
            console.log('ISON');
            isOn = true;
            document.querySelector('html').classList.add('html-go-btn-active');
            goButton.classList.add('go-btn-active');
            //init();
            // let [tabInit] = await chrome.tabs.query({ active: true, currentWindow: true });
            /* chrome.scripting.executeScript({ // TODO
                // target: { tabId: thisTabId },
                // function: tesst, 
                function: init, 
                args: [false],
            }); */
            
            /* chrome.scripting.executeScript({
                function: init, 
                args: [false],
            }); */
            
        } else {

        }
        
    });
    
    
    
    
    /////
    
            if (isOnOrOff === 'on') {
            console.log('ISON');
            isOn = true;
            document.querySelector('html').classList.add('html-go-btn-active');
            goButton.classList.add('go-btn-active');
            //init();
            // let [tabInit] = await chrome.tabs.query({ active: true, currentWindow: true });
            /* chrome.scripting.executeScript({ // TODO
                // target: { tabId: thisTabId },
                // function: tesst, 
                function: init, 
                args: [false],
            }); */
            
            /* chrome.scripting.executeScript({
                function: init, 
                args: [false],
            }); */
            
        } else {

        }
    
    /////
    
    
    

    // When the button is clicked, inject init() into current page
    goButton.addEventListener('click', async () => {
        
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        console.log('BAM');
        
        
        
        
        
        
        
        
        /* if (onOff) {
            goButton.classList.add('true');
            
        } else {
            goButton.classList.add('false');
        } */
        
        //let html = document.documentElement;

        // TODO: make amzn specific

        //tesst();

        // let container = ('.your-orders-content-container__content.js-yo-main-content'); // todo

        // if (goButton.classList.contains('go-btn-active') && document.documentElement.classList.contains('html-go-btn-active')) {
        if (goButton.classList.contains('go-btn-active') || isOn) {
            
            chrome.storage.sync.set({goBtnActive: true}, function() {
                console.log('button active = ' + ['goBtnActive']);
            });  
          
            console.log('active');
          
          // isOn = false;
          
          // container.classList.add('test'); // todo
          
          document.querySelector('html').classList.remove('html-go-btn-active'); // TODO classname
          
          goButton.classList.remove('go-btn-active');
          
          goButton.innerHTML = 'GO'; // todo
          
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            // function: amznReturnsHide, 
            function: amznReturnsHide, 
            args: [false],
          });
      
        } else {
            
            console.log('!active');
            
          document.querySelector('html').classList.add('html-go-btn-active');
            
          goButton.classList.add('go-btn-active');
          goButton.innerHTML = 'STOP'; // todo
          
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            // function: tesst, 
            function: init, 
            args: [false],
          });
          
          // amznReturnsInit();
          // amznReturnsShow(); // TODO: refactor
        }
        
        if (isOn) {
            isOn = false;
        } else {
            isOn = true;
        }

      /*chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: init, 
      });*/
      
      // $(this).style.backgroundColor = 'blue';
      // goButton.style.backgroundColor = 'blue';
      
      // TODO: make amzn specific
      /*if (goButton.classList.contains('go-btn-active')) {
          goButton.classList.remove('go-btn-active');
          goButton.innerHTML = 'GO';
          //amznReturnsHide();
      } else {
          goButton.classList.add('go-btn-active');
          goButton.innerHTML = 'STOP';
          // amznReturnsInit();
          // amznReturnsShow(); // TODO: refactor
      }*/
      
      // goButton.toggleClass('go-btn-active');
      
      // goButton.addClass('go-btn-active');
      
    });

    // The body of this function will be executed as a content script inside the current page
    function init() {
        
        testFunct();
        amznReturnsInit();
        
      /* chrome.storage.sync.get("color", ({ color }) => {
        // document.body.style.backgroundColor = color;
        let pArr = document.getElementsByTagName('div');
        
        if (pArr.length > 0) {
            for (let i = 0; i < pArr.length; i++) {
                //pArr[i].style.color = "#000";
                pArr[i].style.color = "red"; // todo
            }
        }
        
      }); */
      
      /* **** */
      /*  yt  */
      /* **** */
      
      /* yt: views vs. likes */
      if ($('.view-count').length && $('yt-formatted-string[aria-label*="like"]').length) {
        console.log($('.view-count').text().length);
        console.log($('yt-formatted-string[aria-label*="like"]').attr('aria-label').length);    

        let views = $('.view-count').css('color', '#c900b5').css('font-weight', '500');

        views = views.text().replace(' views', '');

        let likes = $('yt-formatted-string[aria-label*="like"]').attr('aria-label').replace(' like', ''); // in case likes are 1
        likes = likes.replace('s', ''); // in case likes are > 1
        $('yt-formatted-string[aria-label*="like"]').css('color', '#0099e4');

        views = views.replace(/\,/g, '');
        likes = likes.replace(/\,/g, '');      

        if (likes === 'No') {
        likes = 0;
        }
        if (views === 'No') {
        views = 0;
        }

        let ratio = likes === 0 && views === 0 ? 0 : likes / views;
        let percent = (ratio*100).toFixed(2);
        let percentVal = percent + '%'; // todo
        let percentText = percentVal + ' of likes';

        console.log('---');
        console.log(views);
        console.log(likes);
        console.log(percentText);

        $('yt-formatted-string[aria-label*="likes"]').css('color', '#0099e4'); // todo

        $('<div>', {
        id: 'percent-wrapper',
        title: 'Likes to views ratio display',
        style: ''
        }).appendTo('#info-contents');

        $('<div>', {
            id: 'percent-bar',
            title: 'Likes to views ratio display',
            style: 'margin-top: 1em; width: calc(7em - 2px); height: calc(1em - 2px); background-color: white; border: 2px solid #505050; border-radius: 2px; display: flex; flex-direction: row-reverse; position: relative'
        }).appendTo('#percent-wrapper');

        $('<div>', {
            id: 'percent-bar-views',
            style: 'width: 100%; height: calc(1em - 1px); /* background-color: var(--yt-spec-10-percent-layer); */ background-color: #ff00e5; border-radius: 2px; top: 0; position: absolute;'
        }).appendTo('#percent-bar');

        $('<div>', {
            id: 'percent-bar-likes',
            style: 'width: ' + percentVal + '; height: calc(1em - 1px); background-color: #0099e4; border-radius: 1px; border-left: 1px solid #fff; top: 0; right: 0px; position: absolute;'
        }).appendTo('#percent-bar');   

        $('<div>', {
            id: 'percent-text',
            title: percentText,
            style: 'margin-top: .25em;',
            html: percentText
        }).appendTo('#percent-wrapper');     
      }
      
      /* yt: blur annoying thumbnail img on click */
      $('<div>', {
        class: 'blur-img-toggle',
        style: 'width: .75em; height: .75em; margin: 2px; position: absolute; top: 0; background-color: red; z-index: 10000; border: 1px solid #2222; cursor: default; /* pointer-events: none; */'
      }).prependTo('yt-img-shadow.ytd-thumbnail'); // insertAfter
      
      function blurImg() {
          $('.blur-img-toggle').on('click', function(e) {
          $(event.target).next('img').css('filter', 'blur(10px)');
          e.preventDefault();
          e.stopPropagation();
        });
      };
      
      blurImg();
      
      $('#right-arrow').on('click', function(e) {
          blurImg();
      });   
    


    
    /* **** */
    /* amzn */
    /* **** */

    /* amzn: track your returns */
    
    function amznReturnsInit() {
        
            
        chrome.storage.sync.get(['onOrOff'], function(result) {
            // if (!result.onOrOff) result.onOrOff = true;
            let onOrOffText;
            if (result.onOrOff === 'off') {
                onOrOffText = 'on';
                isOn = true;
                // result.onOrOff = 'on';
            } else {
                onOrOffText = 'off';
                isOn = false;
            }
            onOrOffText = 'on'; // for now
            chrome.storage.sync.set({onOrOff: onOrOffText}, function() {
              // console.log('');
            });                
            console.log('init: ' + onOrOffText);
        });
            
        // TODO: localization

        // if (($(document.documentElement).attr('lang').indexOf('en')) !== -1) { // IF EN
        // if (($(document.documentElement).attr('lang').indexOf('de')) !== -1) { // IF DE
        if (true) { // IF true (for now)            
            amznReturnsFunc('de'); // TODO: pass lang as param
        }
        
    }
        
    function amznReturnsFunc(lang = 'de') { // TODO: default lang (for now)
        
        let ordersOnPage = $('.order-card.js-order-card');
        ordersOnPage = $('.order-card.js-order-card .a-row.a-size-small');
          
        let returnDates = [];
        
        for (let i = 0; i < ordersOnPage.length; i++) {
            
            // let txt = ordersOnPage.eq(i).text();
            let returnTxt = ordersOnPage.eq(i).text();
            returnTxt = returnTxt.replace('Rücksendung bis zum ', '');
            
                // str.replace(/\u00e4/g, "ae"); // HOWTO solved
                // Ü, ü     \u00dc, \u00fc
                // Ä, ä     \u00c4, \u00e4
                // Ö, ö     \u00d6, \u00f6
                // ß        \u00df          
              
            /* lang-specific (DE) */
            // TODO: refactor -> move into localization func
            
            // ü --> ue
            returnTxt = returnTxt.replace(/\u00fc/g, 'ue');
            
            // DE CASE: still rueckgebable
            returnTxt = returnTxt.replace('Ruecksendung bis zum ', '');
            
            // DE CASE: over
            returnTxt = returnTxt.replace('Zeitraum fuer Rueckgabe endet am ', '');
            
            // ö --> oe
            returnTxt = returnTxt.replace(/\u00f6/g, 'oe');
            returnTxt = returnTxt.replace(' moeglich.', '');

            returnDates.push(returnTxt);

            // ordersOnPage.eq(i).parents(".a-fixed-left-grid").addClass('returnable-wrapper-' + i); // unnecessary
            ordersOnPage.eq(i).parents('.a-fixed-left-grid').attr('data-returnable-until', returnTxt); // due date of return 
            ordersOnPage.eq(i).parents('.a-fixed-left-grid').attr('title', '(bis ' + returnTxt + ')'); // due date of return 
              
            /* let daysUntilTxt = '';
            let daysUntil;
            let dateOfReturn; */
            
            let dateToday = new Date();
            let todayMonth = dateToday.getMonth()+1;
            let todayDay = dateToday.getDate();
            let todayYear = dateToday.getFullYear();

            let nowDate = todayYear + '/' + todayMonth + '/' + todayDay;

            let returnDateVar = returnTxt.split('.');

            let returnDate = returnDateVar[2] + '/' + returnDateVar[1] + '/' + returnDateVar[0];

            let dateDiffMs = new Date(returnDate) - new Date(nowDate);

            let dateDiffDays = dateDiffMs / (1000 * 60 * 60 * 24);           

            // console.log(returnDate + ' ' + nowDate);
            // console.log(dateDiffMs + ' ' + dateDiffDays);

            // todo: refctr into func SNGLR
            let dateSnglr;
            
            // dateSnglr = dateDiffDays === 1 ? '1' : '0';

            dateDiffDays = Math.round(dateDiffDays);
            
            if (dateDiffDays < 0) {
                ordersOnPage.eq(i).parents('.a-fixed-left-grid').addClass('returnable-wrapper-minus');               
            }

            ordersOnPage.eq(i).parents('.a-fixed-left-grid').attr('data-days-until', dateDiffDays); // days from now until due date of return 
            // ordersOnPage.eq(i).parents('.a-fixed-left-grid').attr('data-days-snglr', dateSnglr); // plurality (for grammatical reasons)
            
            // TODO: operator
            //dateDiffDays === 1 ? ordersOnPage.eq(i).parents('.a-fixed-left-grid').addClass('returnable-wrapper-sng') : console.log(''); // plurality (for grammatical reasons)
            
            if (dateDiffDays < 0) {
                ordersOnPage.eq(i).parents('.a-fixed-left-grid').addClass('returnable-wrapper-minus');
            }
            
            if (dateDiffDays == 'NaN') {
                // TODO: deal with this
                console.log('NAN');
            }
            
            

            // not needed
            // addReturnableUntil('returnable-wrapper-' + i, txt);

            // inserted div instead of before 
            /* $('<div class="nan">', {
                // title: '"' + txt + '"',
                title: txt,
                style: 'margin-top: 1em; width: calc(7em - 2px); height: calc(1em - 2px); background-color: white; border: 2px solid #505050; border-radius: 2px; display: flex; flex-direction: row-reverse; position: relative'
            }).insertBefore(ordersOnPage.eq(i).parents(".a-fixed-left-grid")); */

            /* $('<div class="nann">', {
                // title: '"' + txt + '"',
                title: txt,
                style: 'margin-top: 1em; width: calc(7em - 2px); height: calc(1em - 2px); background-color: white; border: 2px solid #505050; border-radius: 2px; display: flex; flex-direction: row-reverse; position: relative'
            }).appendTo(ordersOnPage.eq(i).parents(".a-fixed-left-grid")); */

        }
        
        // style return date as displayed
        ordersOnPage.addClass('orders-on-page'); // TODO: style differently maybe

        ordersOnPage.parents('.a-fixed-left-grid').addClass('returnable-wrapper');
        
        // $('.returnable-wrapper').parents(".a-box-inner").addClass('returnable-outer-wrapper');
        $('.returnable-wrapper').parents('.a-box.shipment.shipment-is-delivered').addClass('returnable-outer-wrapper');
        
        $('.returnable-wrapper-minus').parents('.a-box.shipment.shipment-is-delivered').addClass('returnable-outer-wrapper-minus');
        
        /* s */
        
        
        /* css injection func */
        // TODO
        function addCSS(styleString) {
            const style = document.createElement('style');
            style.textContent = styleString;
            document.head.append(style);
        }

        // unnecessary
        function addReturnableUntil(classI, dateI) {
            const styleNew = document.createElement('style');
            let dateStyle = '';
            dateStyle = '.' + classI + '::before { content: "> returnable until ' + dateI + '" !important;}';
            styleNew.textContent = dateStyle;
            document.head.append(styleNew);
        }

        /* css injection func exec */ 
        addCSS(`

            /* date of due return */

            /* .a-box.shipment.shipment-is-delivered.returnable-wrapper::before { */
            .returnable-wrapper::before {
                /* content: '> returnable untillll '; */
                position: absolute;
                left: -2px;
                transform: translate(-100%, -2px);
                font-size: 18px !important;
                line-height: 24px!important;
                padding: 14px 18px;
                background: cornflowerblue;
                color: #fff;
            }
          
            /* .a-box.shipment.shipment-is-delivered.returnable-wrapper { */
            .returnable-wrapper {
                border: 2px solid cornflowerblue;
                margin: 4px 0;
            }
          
            .returnable-wrapper::before {
                position: absolute;
                left: -20px;
                transform: translate(-100%, -2px);
                font-size: .9em !important;
                line-height: 1.2em;
                /* padding: .8em 1em; */
                padding: .4em .8em;
                background: cornflowerblue;
                color: #fff;
            }
            
            /* take date value from attr */
            html[lang^="de-"] .returnable-wrapper::before {
                /* 
                    content: '> returnable until ' attr(data-returnable-until);
                    content: '> noch ' attr(data-days-until) ' Tage (bis ' attr(data-returnable-until) ')'; 
                */
                /* content: 'in ' attr(data-days-until) ' Tag(en)'; */ /* TODO: sing. vs. plur. */
                
                content: 'noch ' attr(data-days-until) ' Tage'; /* sng. vs. plr.: plr */
            }
            
            /* take date value from attr */
            html[lang^="en-"] .returnable-wrapper::before {
                /* 
                    content: '> returnable until ' attr(data-returnable-until);
                    content: '> noch ' attr(data-days-until) ' Tage (bis ' attr(data-returnable-until) ')'; 
                */
                /* content: 'in ' attr(data-days-until) ' Tag(en)'; */ /* TODO: sing. vs. plur. */
                
                content: 'in ' attr(data-days-until) ' days'; /* sng. vs. plr.: plr */
            }
            
            html[lang^="de-"] .returnable-wrapper.returnable-wrapper-sng::before {
                content: 'noch ' attr(data-days-until) ' Tag'; /* sng. vs. plr.: sng */
            }
            
            html[lang^="en-"] .returnable-wrapper.returnable-wrapper-sng::before {
                content: 'in ' attr(data-days-until) ' day left'; /* sng. vs. plr.: sng */
            }
            
            
            
            /* days until */
            
            .returnable-wrapper::after {
                content: '> days until return is due: ' attr(data-days-until);
            }
            
            .returnable-wrapper::after {
                position: absolute;
                left: -20px;
                transform: translate(-100%, -2px);
                font-size: .9em !important;
                line-height: 1.2em;
                padding: 0.8em 1em;
                background: cornflowerblue;
                color: #fff;
                display: none;
                left: 0;
            }
            
            .orders-on-page {
                font-weight: bold;
                background: aliceblue;
                display: inline-block;
                width: auto;
                padding: 4px 8px;
            }
            
            /* outer wrapper for returnable orders */
            
            .returnable-outer-wrapper {
                background: #ffd81461;
                border: 2px solid;
            }
            
            /* .returnable-outer-wrapper .a-fixed-left-grid-inner:before {
                content: "";
                border-top: 60px solid transparent;
                border-bottom: 60px solid transparent;
                border-left: 60px solid green;
                display: inline-block;
                position: absolute;
                left: -20px;
                z-index: 1;
            } */
            
            .returnable-outer-wrapper .a-fixed-left-grid-inner:before {
                content: "";
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                border-left: 10px solid cornflowerblue;
                display: inline-block;
                position: absolute;
                left: -22px;
                top: -2px;
                z-index: 1;
            }
            
            .returnable-outer-wrapper.a-box .a-box-inner {
                margin: -1px;
            }
            
            /* negative returnable days */
            
            .returnable-outer-wrapper.returnable-outer-wrapper-minus .returnable-wrapper::before {
                background: #607190;
            }
            
            .returnable-outer-wrapper.returnable-outer-wrapper-minus .a-fixed-left-grid-inner:before {
                border-left: 10px solid #607190;
            }
                        
            html[lang^="de-"] .returnable-outer-wrapper.returnable-outer-wrapper-minus .returnable-wrapper::before {
                content: 'vor ' attr(data-days-until) ' Tagen';
            }
            
            html[lang^="en-"] .returnable-outer-wrapper.returnable-outer-wrapper-minus .returnable-wrapper::before {
                content: 'due since ' attr(data-days-until) ' days';
            }
            
            html[lang^="de-"] a[id^="Artikel-zur"], 
            html[lang^="en-"] a[id^="Return-"] {
                color: #fff !important;
                background: cornflowerblue !important;
            }
            
            /* .a-row.shipment-top-row.js-shipment-info-container span.a-size-medium.a-text-bold {
                
            } */
            
            
        `);
    
        }

        function testFunct() {
            console.log('Thanks for using this extension! Have a pleasant day/night!');
            
            // to retrieve the data, use 'sync' instead of 'local' if using sync
            chrome.storage.sync.get(['onOrOff'], function(result) {
               console.log('new: ' + result.onOrOff);
               /* console.log('new2: ' + result.keysz);
               console.log('new4: ' + result.key);
               console.log('new3: ' + results.keysz); */
               
            });
        }
        
    }
    
    // todo: cleanup (remove classes etc. properly)
    function amznReturnsHide() {
        $('.returnable-wrapper').removeClass('returnable-wrapper');
        $('.returnable-outer-wrapper').removeClass('returnable-outer-wrapper');
        // console.log('removing');
        
        chrome.storage.sync.get(['onOrOff'], function(result) {
            // if (!result.onOrOff) result.onOrOff = true;
            let onOrOffText;
            if (result.onOrOff === 'off') {
                onOrOffText = 'on';
                isOn = true;
                // result.onOrOff = 'on';
            } else {
                onOrOffText = 'off';
                isOn = false;
            }
            onOrOffText = 'off'; // for now
            chrome.storage.sync.set({onOrOff: onOrOffText}, function() {
              // console.log('');
            });                
            console.log('removing: ' + onOrOffText);
        });
        
        // https://stackoverflow.com/questions/62863364/chrome-extension-state-management
        
        // uses local storage
        /* chrome.storage.local.set({key: false}, function() {
          console.log('NOW: ' + false);
        }); */
            
            
            
            
        // uses synced storage, hits Chrome backend when being set
        /*chrome.storage.sync.set({onOrOff: 'off'}, function() {
          console.log('NOW: Value is set to.... ' + 'xy');
        });*/
    }
    
    function tesst(x) {
        if (x) {
            amznReturnsHide();
        } else {
            //init();
            amznReturnsHide();
        }
        console.log('bla');
    }

}); 