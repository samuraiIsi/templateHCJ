var panelsBox =  function(){
	var panelsHttps = new XMLHttpRequest();
    var urlPanels = "../../../data/panels.json";

    panelsHttps.onreadystatechange = function() {
        if (panelsHttps.readyState == 4 && panelsHttps.status == 200) {
            var info = JSON.parse(panelsHttps.responseText);
            panel(info);
        }
    };

    panelsHttps.open("GET", urlPanels, true);
    panelsHttps.send();
	  var panel = function(data){
	  	var article, divParent, divSubParent, divHeader, divBody, anchor, divCaption,divCaptionContent, iconContent, imgCaption, divFooter;
	  	for(var i = 0; i < data.panelsBox.length; i++) {
		  	article = document.createElement('article');
		  	divParent = document.createElement('div');
		  	divParent.setAttribute('class', data.panelsBox[i].divParentClass);
		  	divSubParent = document.createElement('div');
		  	divSubParent.setAttribute('class', data.panelsBox[i].divSubParentClass);
		  	divHeader = document.createElement('div');
		  	divHeader.setAttribute('class', data.panelsBox[i].divHeaderClass);
		  	divBody = document.createElement('div');
		  	divBody.setAttribute('class', data.panelsBox[i].divBodyClass);
		  	anchor = document.createElement('a');
		  	anchor.setAttribute('class', data.panelsBox[i].anchorClass);
		  	anchor.setAttribute('href', data.panelsBox[i].anchorLink);
		  	divCaption = document.createElement('div');
		  	divCaption.setAttribute('class', data.panelsBox[i].divCaptionClass);
		  	divCaptionContent = document.createElement('div');
		  	divCaptionContent.setAttribute('class',data.panelsBox[i].divCaptionClass);
		  	iconContent = document.createElement('i');
		  	iconContent.setAttribute('class', data.panelsBox[i].iconContentClass);
		  	imgCaption = document.createElement('img');
		  	imgCaption.setAttribute('src', data.panelsBox[i].imgCaptionSrc);
		  	imgCaption.setAttribute('class', data.panelsBox[i].imgCaptionClass);
		  	imgCaption.setAttribute('alt', data.panelsBox[i].imgCaptionAlt);
		  	divCaptionContent.appendChild(imgCaption);
		  	divCaptionContent.appendChild(iconContent);
		  	divCaption.appendChild(divCaptionContent)
		  	anchor.appendChild(divCaption);
		  	divBody.appendChild(anchor);
		  	divSubParent.appendChild(divHeader);
		  	divSubParent.appendChild(divBody);
		  	divParent.appendChild(divSubParent);

	  	}
	  	document.getElementById('wrapper6').appendChild(divParent); 
  	};
};