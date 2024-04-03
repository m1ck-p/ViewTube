jQuery(document).ready(function($) {

    // Initialize button with user's preferred color
    let goButton = document.getElementById("changeColor");

    chrome.storage.sync.get("color", ({ color }) => {
      goButton.style.backgroundColor = color;

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

    // When the button is clicked, inject init() into current page
    goButton.addEventListener('click', async () => {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    

// TODO: make amzn specific

tesst();

      if (goButton.classList.contains('go-btn-active')) {
          
          
          
          
          goButton.classList.remove('go-btn-active');
          goButton.innerHTML = 'GO';
          
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            // function: amznReturnsHide, 
            function: init, 
            args: [false],
          });
      
      } else {
          goButton.classList.add('go-btn-active');
          goButton.innerHTML = 'STOP';
          
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            // function: tesst, 
            function: amznReturnsHide, 
            args: [false],
          });
          
          // amznReturnsInit();
          // amznReturnsShow(); // TODO: refactor
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
        
        // TODO: localization
        // if ($(document.documentElement).attr('lang').indexOf('de')) {
        if ('de'.indexOf($(document.documentElement).attr('lang'))) {
            amznReturnsFunc('de'); // pass lang as param
        }
        
    }
    
    function amznReturnsFunc(lang = 'de') { // default lang (for now)
    
    let ordersOnPage = $('.order-card.js-order-card');
    ordersOnPage = $('.order-card.js-order-card .a-row.a-size-small');
      
    let returnDates = [];
    
    for (let i = 0; i < ordersOnPage.length; i++) {
        
        let txt = ordersOnPage.eq(i).text();
        txt = txt.replace('Rücksendung bis zum ', '');
        
            // str.replace(/\u00e4/g, "ae"); // HOWTO solved
            // Ü, ü     \u00dc, \u00fc
            // Ä, ä     \u00c4, \u00e4
            // Ö, ö     \u00d6, \u00f6
            // ß        \u00df          
          
        /* lang-specific (DE) */
        // TODO: refactor -> move into localization func
        
        // ü --> ue
        txt = txt.replace(/\u00fc/g, 'ue');
        txt = txt.replace('Ruecksendung bis zum ', '');
        
        // ö --> oe
        txt = txt.replace(/\u00f6/g, 'oe');
        txt = txt.replace(' moeglich.', '');

        returnDates.push(txt);

        // ordersOnPage.eq(i).parents(".a-fixed-left-grid").addClass('returnable-wrapper-' + i); // unnecessary
        ordersOnPage.eq(i).parents(".a-fixed-left-grid").attr('data-returnable-until', txt); // due date of return 
          
        /* let daysUntilTxt = '';
        let daysUntil;
        let dateOfReturn; */
        
        let dateToday = new Date();
        let month = dateToday.getMonth()+1;
        let day = dateToday.getDate();
        let year = dateToday.getFullYear();

        let nowDate = year + '/' + month + '/' + day;

        let mdy = txt.split('.');

        let returnDate = mdy[2] + '/' + mdy[1] + '/' + mdy[0];

        const dateDiffMs   = new Date(returnDate) - new Date(nowDate);

        const dateDiffDays = dateDiffMs / (1000 * 60 * 60 * 24);           

        ordersOnPage.eq(i).parents(".a-fixed-left-grid").attr('data-days-until', dateDiffDays); // days from now until due date of return 

        // not needed
        // addReturnableUntil('returnable-wrapper-' + i, txt);

    }
    
    // style return date as displayed
    ordersOnPage.addClass('orders-on-page'); // TODO: style differently maybe

    ordersOnPage.parents(".a-fixed-left-grid").addClass('returnable-wrapper');
    
    // $('.returnable-wrapper').parents(".a-box-inner").addClass('returnable-outer-wrapper');
    $('.returnable-wrapper').parents(".a-box.shipment.shipment-is-delivered").addClass('returnable-outer-wrapper');
    
    /* s */
    
    
    /* css injection func */        
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
        .returnable-wrapper::before {
            content: '> returnable until ' attr(data-returnable-until);
            content: '> noch ' attr(data-days-until) ' Tage (bis ' attr(data-returnable-until) ')';
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
        
    `);
    
    }

    function testFunct() {
        console.log('Thanks for using this extension! Have a pleasant day/night!');
    }
    

    
}

    function amznReturnsHide() {
        $('.returnable-wrapper').removeClass('returnable-wrapper');
        $('.returnable-outer-wrapper').removeClass('returnable-outer-wrapper');
        console.log('removing');
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