var panelsBox =  function(){
	var panelsHttps = new XMLHttpRequest();
    var urlPanels = "../../../data/panelsBox.json";

    panelsHttps.onreadystatechange = function() {
        if (panelsHttps.readyState == 4 && panelsHttps.status == 200) {
            var info = JSON.parse(panelsHttps.responseText);
            panelBox(info);
        }
    };

    panelsHttps.open("GET", urlPanels, true);
    panelsHttps.send();
	  var panelBox = function(data){
	  	var article, divParent, divHeader, divHeaderText, divBody, anchor, divCaption,divCaptionContent, iconContent, imgCaption, divFooter;
	  	var screenSize = window.screen.width;
	  	for(var i = 0; i < data.panelsBox.length; i++) {
		  	article = document.createElement('article');
		  	article.setAttribute('class', data.panelsBox[i].articleClass)
		  	divParent = document.createElement('div');
		  	divParent.setAttribute('class', data.panelsBox[i].divParentClass);
		  	divHeader = document.createElement('div');
		  	divHeader.setAttribute('class', data.panelsBox[i].divHeaderClass);
		  	divHeaderText = document.createTextNode(data.panelsBox[i].divHeaderText)
		  	divBody = document.createElement('div');
		  	divBody.setAttribute('class', data.panelsBox[i].divBodyClass);
		  	anchor = document.createElement('a');
		  	anchor.setAttribute('href', '#');
		  	anchor.addEventListener('click', changeView(data.panelsBox[i].anchorLink));
		  	anchor.setAttribute('class', data.panelsBox[i].anchorClass);
		  	divCaption = document.createElement('div');
		  	divCaption.setAttribute('class', data.panelsBox[i].divCaptionClass);
		  	divCaptionContent = document.createElement('div');
		  	divCaptionContent.setAttribute('class',data.panelsBox[i].divCaptionContentClass);
		  	iconContent = document.createElement('i');
		  	iconContent.setAttribute('class', data.panelsBox[i].iconContentClass);
		  	imgCaption = document.createElement('img');
		  	if(screenSize > 567 && data.panelsBox[i].articleClass == "wrapper-2--box") {
	  			imgCaption.setAttribute('src', data.panelsBox[i].imgCaptionSrcDouble);
	  		}else if(screenSize > 567 &&  screenSize < 1400) {
	  			imgCaption.setAttribute('src', data.panelsBox[i].imgCaptionSrcDouble);
	  		}else{
	  			imgCaption.setAttribute('src', data.panelsBox[i].imgCaptionSrcBasic);
	  		}
		  	imgCaption.setAttribute('class', data.panelsBox[i].imgCaptionClass);
		  	imgCaption.setAttribute('alt', data.panelsBox[i].imgCaptionAlt);
		  	imgCaption.setAttribute('width', data.panelsBox[i].imgCaptionMaxWidth);
		  	imgCaption.setAttribute('height', data.panelsBox[i].imgCaptionMaxHeight);
		  	divFooter = document.createElement('div');
		  	divFooter.setAttribute('class', data.panelsBox[i].divFooterClass);
		  	divFooterText = document.createTextNode(data.panelsBox[i].divFooterText);
		  	divCaptionContent.appendChild(iconContent);
		  	divCaption.appendChild(divCaptionContent);
		  	divCaption.appendChild(imgCaption);
		  	anchor.appendChild(divCaption);
		  	anchor.appendChild(imgCaption);
		  	divBody.appendChild(anchor);
		  	divHeader.appendChild(divHeaderText);
		  	divParent.appendChild(divHeader);
		  	divParent.appendChild(divBody);
		  	divFooter.appendChild(divFooterText);
		  	divParent.appendChild(divFooter);
		  	article.appendChild(divParent);
		  	
		  	document.getElementById(data.wrappersId[i]).appendChild(article); 
	  	}
	  	
  	};
};