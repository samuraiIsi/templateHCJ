var popUpsHttps, urlpopUps, validatedPopUp;
popUpsHttps = new XMLHttpRequest();
urlpopUps = "../../../data/popUp.json";

popUpsHttps.onreadystatechange = function() {
    if (popUpsHttps.readyState == 4 && popUpsHttps.status == 200) {
        info = JSON.parse(popUpsHttps.responseText);
        validatedPopUp(info);
    }
};

popUpsHttps.open("GET", urlpopUps, true);
popUpsHttps.send();

validatedPopUp = function(data) {
	divModal = document.createElement('div');
	divModal.setAttribute('id', data.divModalId);
	divModal.setAttribute('class', data.divModalClass);
	divParent = document.createElement('div');
	divParent.setAttribute('class', data.divParentClass);
	divHeader = document.createElement('div');
	divHeader.setAttribute('class', data.divHeaderClass);
	spanHeader = document.createElement('span');
	spanHeader.setAttribute('class', data.spanHeaderClass);
	spanHeader.setAttribute('title', data.spanHeaderTitle);
	spanHeader.setAttribute('onclick', data.spanHeaderMethod);
	spanHeaderText = document.createTextNode('X');
	imgHeader = document.createElement('img');
	imgHeader.setAttribute('src', data.imgHeaderSrc);
	imgHeader.setAttribute('alt', data.imgHeaderAlt);
	imgHeader.setAttribute('class', data.imgHeaderAltClass);
	pMessage = document.createElement('p');
	pMessage.setAttribute('class', 'fs20 text-center')
	ptext = document.createTextNode("Thank you very much for logging");
	divContainer = document.createElement('div');
	divContainer.setAttribute('class', data.divContainerClass);

	pMessage.appendChild(ptext);
	spanHeader.appendChild(spanHeaderText);
	divHeader.appendChild(spanHeader);
	divHeader.appendChild(imgHeader);

	divContainer.appendChild(pMessage);

	divParent.appendChild(divHeader);
	divParent.appendChild(divContainer);
	divModal.appendChild(divParent);
	
	document.getElementById('bodyContainer').appendChild(divModal);
};