"use strict"

  var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
  var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
  var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
  var HIDDEN_DETAIL_CLASS = "hidden-detail";
  var ESC_KEY =27;

  InitListeners();

  function InitListeners(){
    var thumbs  = getThumbs();
    thumbs.forEach(addThumbListener);
    addKeyPressHandler();
  }

  function getThumbs(){
    var thumbs = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    return [].slice.call(thumbs);
  }

  function addThumbListener(thumb) {
    thumb.addEventListener('click', function (event) {
      event.preventDefault();
      setDetails(getImage(thumb), getTitle(thumb));
      showDetails();
    });
  }

  function showDetails(){
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  }

  function addKeyPressHandler(){
    document.body.addEventListener('keyup', function (event) {
      event.preventDefault();
      if( event.keyCode === ESC_KEY )
        hideDetails();
    });
  }

  function hideDetails(){
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
  }

  function setDetails(image, title){
      var detailImg = document.querySelector(DETAIL_IMAGE_SELECTOR);
      detailImg.setAttribute('src', image);

      var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
      detailTitle.textContent = title;
  }

  function getImage(thumb){
    return thumb.getAttribute('data-image-url');
  }

  function getTitle(thumb){
    return thumb.getAttribute('data-image-title');
  }
