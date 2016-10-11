var IMAGE_LINK_SELECTOR = '[data-image-role="trigger"]',
		IMAGE_TITLE_SELECTOR = '[data-image-role="title"]',
		IMAGE_TARGET_SELECTOR =  '[data-image-role="target"]';
function setDetails(imgurl, imgtitle){

	'use strict';
	

var imagedetail = document.querySelector(IMAGE_TARGET_SELECTOR),
	imagetitle = document.querySelector(IMAGE_TITLE_SELECTOR),
	imagelist = document.querySelector(IMAGE_LINK_SELECTOR);

	
	titlefromPanel(imagelist);

	imagedetail.setAttribute('src',imgurl);

	imagetitle.textContent = imgtitle;
	//imagefromPanel(imagelist);


	
}

setDetails('images/ecology1.png',"This is the first text" );

function imagefromPanel(images){
	'use strict';
	return   images.getAttribute('data-image-url');
	
}

function titlefromPanel(title){
	'use strict';
	return title.getAttribute('data-image-title');

}


function getimagePanelIsArray(){
	'use strict';
	var images  = document.querySelectorAll(IMAGE_LINK_SELECTOR),
		imageArray = [].slice.call(images);
	return imageArray;
}

function initializeEvents(){
	'use strict';
	var Thumbnails = getimagePanelIsArray();
	Thumbnails.forEach(addImageClickHandler);


}



initializeEvents();


imagelist = document.querySelector(IMAGE_LINK_SELECTOR);


function imagesFromPanel(imageList){

	var url = imageList.getAttribute('[]')
	console.log(url);

}

function setDetailsFromImage(imageList){
	'use strict';
	var image = imagefromPanel(imageList),
	title = titlefromPanel(imageList);
	setDetails(image,title);

	console.log(image);
	console.log(title);
	
	
}
function addImageClickHandler(imageList){
	imageList.addEventListener('click',function(event){
	event.preventDefault();

	//console.log("You have clicked", event);

	setDetailsFromImage(imageList);

});

}




// (function(){
// 	'use strict';
// 	var IMAGE_LINK_SELECTOR = '[data-image-role="trigger"]',
// 		IMAGE_TITLE_SELECTOR = '[data-image-role="title"]',
// 		IMAGE_TARGET_SELECTOR =  '[data-image-role="target"]';

// var imagedetail = document.querySelector(IMAGE_TARGET_SELECTOR);

// imagedetail.setAttribute('src','images/ecology1.png');
// console.log(imagedetail);


// })()