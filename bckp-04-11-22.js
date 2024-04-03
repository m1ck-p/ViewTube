jQuery(document).ready(function($){
console.log('TEST');
// Initialize button with user's preferred color
//$('body').css('display', 'none'); // todo


// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
  
  
  
  /* test */
  
  /**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

addStyle(`
  body {
    color: red;
  }
`);

addStyle(`
  body {
    background: silver;
  }
`);


/* css */

addStyle(`
  .a-box.shipment.shipment-is-delivered.returnable-wrapper::before {
    content: '> returnable until 01.12.2022';
    position: absolute;
    /* left: -10px; */
    /* top: 0; */
    transform: translate(-100%);
    font-size: 18px !important;
    line-height: 24px!important;
    padding: 14px 18px;
    background: cornflowerblue;
    color: #fff;
  }
`);

  /* css */

  
  /* -test */
  
  
  
  
  

  
  
  

  
  
  
});

// added further

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
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
  
  /*
  // get view count (unredered)
  let viewCount = document.getElementsByClassName('view-count');
  if (viewCount.length > 0) {
      viewCount[0].style.color = "blue"; // todo
  }
  
  // get like count (unredered
  let likeCount = document.getElementsByClassName('style-text'); // todo
  if (likeCount.length > 0) {
      likeCount[0].style.color = "purple"; // todo
      // likeCount[0].style.color = "red"; // test
  }
  
  console.log('TSSST');
  console.log('phw');
  console.log(likeCount.length);
  console.log(viewCount.length);
  console.log(jQuery('.view-count').text());
  console.log(jQuery('yt-formatted-string[aria-label*="likes"]').text());
  
  */
  
  if (jQuery('.view-count').length && jQuery('yt-formatted-string[aria-label*="like"]').length) {
      console.log($('.view-count').text().length);
      console.log($('yt-formatted-string[aria-label*="like"]').attr('aria-label').length);
  
  
  let views = jQuery('.view-count').css('color', '#c900b5').css('font-weight', '500');
  // let views = jQuery('.view-count').css('font-weight', '500');
  // let views = jQuery('.view-count').text().replace(' views', '');
  views = views.text().replace(' views', '');
  // console.log(views);
  // views = views.replace(',', '');
  // let likes = jQuery('yt-formatted-string[aria-label*="likes"]').text();
  let likes = jQuery('yt-formatted-string[aria-label*="like"]').attr('aria-label').replace(' like', ''); // in case likes are 1
  likes = likes.replace('s', ''); // in case likes are > 1
  jQuery('yt-formatted-string[aria-label*="like"]').css('color','#0099e4');

  //likes = likes.replace(',', '');
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

  //jQuery('.view-count').val();
  //jQuery('body').css('display', 'none'); // todo
  //$('yt-formatted-string[aria-label*="likes"]').css('color', 'green'); // todo
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
  
  
  
/* div#info-contents {
    margin-bottom: 1em;
} */
  
  }
  
  
  // $('yt-img-shadow').css('');
  //$('yt-img-shadow.ytd-thumbnail img.yt-img-shadow').css('filter', 'blur(10px)');
  //$('yt-img-shadow.ytd-playlist-custom-thumbnail-renderer img.yt-img-shadow').css('filter', 'blur(10px)');
  
  $('<div>', {
        class: 'blur-img-toggle',
        style: 'width: .75em; height: .75em; margin: 2px; position: absolute; top: 0; background-color: red; z-index: 10000; border: 1px solid #2222; cursor: default; /* pointer-events: none; */'
    }).prependTo('yt-img-shadow.ytd-thumbnail'); // insertAfter
  
  
    
  
  function blurImg() {
      $('.blur-img-toggle').on('click', function(e) {
      //$('yt-img-shadow.ytd-thumbnail img.yt-img-shadow').css('filter', 'blur(10px)');
      //$('yt-img-shadow.ytd-playlist-custom-thumbnail-renderer img.yt-img-shadow').css('filter', 'blur(10px)');
      $(event.target).next('img').css('filter', 'blur(10px)');
      e.preventDefault();
      e.stopPropagation();
    });
  };
  
  blurImg();
  
  
  $('#right-arrow').on('click', function(e) {
      blurImg();
  });
  
  
  /*******/
  /* amzn */
  
  let ordersOnPage = $('.order-card.js-order-card');
  // ordersOnPage = $('.order-card.js-order-card .a-box.shipment');
  ordersOnPage = $('.order-card.js-order-card .a-row.a-size-small');
  console.log(ordersOnPage.length);
  // console.log(ordersOnPage.a-row.a-size-small.text()); HOWTO
  console.log($('.order-card.js-order-card .a-row.a-size-small').text());
  
  //if($(this).text().match(filter)){
  //if (ordersOnPage.text().contains('Rücksendung bis zum')) {
  //if ($('.order-card.js-order-card .a-row.a-size-small').text().match('Rücksendung bis zum')) {
  //if (~str.indexOf("Yes")) {
  //if (~ordersOnPage.text().indexOf('Rücksendung bis zum')) { // IDA (viz/illstr)
  if ($('.order-card.js-order-card .a-row.a-size-small').text().indexOf('Rücksendung bis zum')) { // IDA (viz/illstr)
      console.log('!');
  }
  
  let returnDates = [];
  for (let i = 0; i < ordersOnPage.length; i++) {
      // console.log(ordersOnPage.eq(i).text());
      // returnDates.eq(i) = '';
      let txt = ordersOnPage.eq(i).text();
      console.log(txt);
      // returnDates.push(ordersOnPage.eq(i).text());
      
      // txt = txt.replace(txt, '');
      txt = txt.replace('Rücksendung bis zum ', '');
      
      
      
        // str.replace(/\u00e4/g, "ae"); // HOWTO solved
        // Ü, ü     \u00dc, \u00fc
        // Ä, ä     \u00c4, \u00e4
        // Ö, ö     \u00d6, \u00f6
        // ß        \u00df
      
      
      txt = txt.replace(/\u00fc/g, 'ue'); // ü --> ue 
      txt = txt.replace('Ruecksendung bis zum ', '');
      
      // txt = txt.replace(' bis zum ', '');
      
      txt = txt.replace(/\u00f6/g, 'oe'); // ö --> oe
      txt = txt.replace(' moeglich.', '');
      
      
      returnDates.push(txt);
      console.log('test ' + txt);
      
      
      
      ordersOnPage.eq(i).parents(".a-fixed-left-grid").addClass('returnable-wrapper-' + i);
      ordersOnPage.eq(i).parents(".a-fixed-left-grid").attr('data-returnable-until', txt); // due date of return 
      
      let daysUntilTxt = '';
      let daysUntil;
      let dateOfReturn;
      let dateToday = new Date();
      var month = dateToday.getMonth()+1;
var day = dateToday.getDate();
var year = dateToday.getFullYear();
      console.log(dateToday);
      console.log(day);
      console.log(month);
      console.log(year);
      
      //let nowDate = year + '-' + month + '-' + day;
      let nowDate = year + '/' + month + '/' + day;
      console.log(nowDate);
      
      var mdy = txt.split('.');
      //let x = new Date(mdy[2], mdy[0] - 1, mdy[1]);
      let x = new Date(mdy[2], mdy[1], mdy[0] - 1);
      
      //let returnDate = mdy[2] + '-' + (mdy[0] - 1) + '-' + mdy[1];
      //let returnDate = mdy[2] + '/' + (mdy[0] - 1) + '/' + mdy[1];
      //let returnDate = mdy[2] + '/' + mdy[1] + '/' + (mdy[0] - 1);
      let returnDate = mdy[2] + '/' + mdy[1] + '/' + mdy[0];
      
      //console.log(x);
      console.log(returnDate);
      
        const dateDiffMs   = new Date(returnDate) - new Date(nowDate);
        console.log('NOW:' + new Date(nowDate));
        console.log('RETURN:' + new Date(returnDate));
        const dateDiffDays = dateDiffMs / (1000 * 60 * 60 * 24);
        
        console.log(dateDiffDays);
      
      ordersOnPage.eq(i).parents(".a-fixed-left-grid").attr('data-days-until', dateDiffDays); // days from now until due date of return 
      
      // not needed
      //addReturnableUntil('returnable-wrapper-' + i, txt);
      
      
      
      
      
      
      
      
      // addReturnableUntil
      
      
      
      
      //returnDates[i] = '';
      //returnDates[i] = ordersOnPage.eq(i).text();
  }
  
  /* for (let i = 0; i < ordersOnPage.length; i++) {
      // if (ordersOnPage.get(i).text().indexOf('Rücksendung bis zum')) {
      // if (ordersOnPage[i].text().indexOf('Rücksendung bis zum')) {
      // if (ordersOnPage.eq(i).text().indexOf('Rücksendung bis zum')) { // NOTE
      // if (($('.order-card.js-order-card .a-row.a-size-small').eq(i).text()).indexOf('Rücksendung bis zum') >= 0) { // NOTE²: .eq(i) and .indexOf
      // if (('Rücksendung bis zum').indexOf($('.order-card.js-order-card .a-row.a-size-small').eq(i).text()) >= 0) { // NOTE²: .eq(i) and .indexOf
      if (!('Rücksendung bis zum').indexOf(ordersOnPage.eq(i).text()) >= 0) { // NOTE²: .eq(i) and .indexOf
          console.log('!');
          //console.log('RETURNABLE ' + ($('.order-card.js-order-card .a-row.a-size-small').eq(i).text())); 
          console.log('RETURNABLE ' + (ordersOnPage).eq(i).text()); 
          ordersOnPage.eq(i).addClass('returnable');
          //$(this).addClass('returnable');
      }
      else {
          console.log('?');
          // console.log('NON-RETURNABLE ' + ($('.order-card.js-order-card .a-row.a-size-small').eq(i).text())); 
          console.log('NON-RETURNABLE ' + (ordersOnPage).eq(i).text()); 
          ordersOnPage.eq(i).addClass('non-returnable');
          //$(this).addClass('non-returnable');
      }
  } */
  
  /* if (ordersOnPage:contains('Rücksendung bis zum')) {
      console.log('returnable');
  } */
  
  // $('.order-card.js-order-card .a-row:contains("Rücksendung bis zum")').addClass('returnable returnable-de');
  //$('.order-card.js-order-card *:contains("Rücksendung bis zum")').addClass('returnable');
  console.log($('.returnable').length);
  
  
  ordersOnPage.css('color', 'red');
  
  // ordersOnPage.parents(".order-card.js-order-card .a-box.shipment").css('background', 'green');
  //ordersOnPage.parents(".order-card.js-order-card .a-box.shipment").addClass('returnable-wrapper');
  ordersOnPage.parents(".a-fixed-left-grid").addClass('returnable-wrapper');
  
    function addStylez(styleString) {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    }
    
    /* function addReturnableUntil(dateI, dateDate) {
      const style = document.createElement('style');
      let dateStyle = '';
      dateStyle = class + i + ' { content: "> returnable until ' + dateDate + '";}';
      style.textContent = dateStyle;
      document.head.append(dateStyle);
    } */
    
    
    // unnecessary
    function addReturnableUntil(classI, dateI) {
      const styleNew = document.createElement('style');
      let dateStyle = '';
      //dateStyle = `.` + classI + ` { content: "> returnable until ` + dateI + `"}`;
      dateStyle = '.' + classI + '::before { content: "> returnable until ' + dateI + '" !important;}';
      //dateStyle = '.' + classI + ' { content: '> returnable until ` + dateI + `'}`;
      styleNew.textContent = dateStyle;
      document.head.append(styleNew);
    }



/* css exec */

/*addReturnableUntil(
    
);*/

addStylez(`

    /* date of due return */

  /*.a-box.shipment.shipment-is-delivered.returnable-wrapper::before { */
  .returnable-wrapper::before {
    content: '> returnable until ';
    position: absolute;
    left: -2px;
    /* top: 0; */
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
    /* top: 0; */
    transform: translate(-100%, -2px);
    /* transform: translate(-100%); */
    font-size: .9em !important;
    line-height: 1.2em;
    padding: 0.8em 1em;
    background: cornflowerblue;
    color: #fff;
}

    /* take date value from attr */
    .returnable-wrapper::before {
        content: '> returnable until ' attr(data-returnable-until);
    }
    
    /* days until */
    
    .returnable-wrapper::after {
        content: '> days until return is due: ' attr(data-days-until);
    }
    
      .returnable-wrapper::after {
    position: absolute;
    left: -20px;
    /* top: 0; */
    transform: translate(-100%, -2px);
    /* transform: translate(-100%); */
    font-size: .9em !important;
    line-height: 1.2em;
    padding: 0.8em 1em;
    background: cornflowerblue;
    color: #fff;
}
    
    `);


  
  
  //
  
  
  
  
// Or
//$("div.test").closest("tr");
  
  
  // );
  
  //  $('yt-img-shadow.ytd-playlist-custom-thumbnail-renderer img.yt-img-shadow').css('filter', 'blur(10px)');

  
  /* width: 10px;
    height: 10px;
    position: absolute;
    background: aqua; */
  
}

}); 