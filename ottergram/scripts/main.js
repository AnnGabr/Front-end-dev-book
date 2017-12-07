"use strict"

  var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
  var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
  var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

  InitListeners();

  function InitListeners(){
    var thumbs  = getThumbs();
    thumbs.forEach(addThumbListener);
  }

  function getThumbs(){
    var thumbs = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    return [].slice.call(thumbs);
  }

  function addThumbListener(thumb) {
    thumb.addEventListener('click', function (event) {
      event.preventDefault();
      setDetails(getImage(thumb), getTitle(thumb));
    });
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
