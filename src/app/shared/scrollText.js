var scrollText = function() {
	var scrollTextHttp = new XMLHttpRequest();
    var urlScrollText = "../../../data/scrollText.json";

    scrollTextHttp.onreadystatechange = function() {
        if (scrollTextHttp.readyState == 4 && scrollTextHttp.status == 200) {
        	var info = JSON.parse(scrollTextHttp.responseText);
            scrollMove(info);
        }
    };
    scrollTextHttp.open("GET", urlScrollText, true);
    scrollTextHttp.send();
	var scrollMove = function(data){
		var divContainer, ulContainer, liList, liListText, anchor;
		for(var i = 0; i < data.scrollText.length; i++) {
			divContainer = document.createElement('div');
			divContainer.setAttribute('class', data.containerStyle[i].scrollContainer);
			ulContainer = document.createElement('ul');
			ulContainer.setAttribute('class', data.containerStyle[i].ulClass);
			for(var j = 0; j < data.scrollText[i].length; j++) {
				liList = document.createElement('li');
				liList.setAttribute('class', data.scrollText[i][j].liListClass);
				anchor = document.createElement('a');
				anchor.setAttribute('href', data.scrollText[i][j].anchorLink);
				anchor.setAttribute('class', data.scrollText[i][j].anchorClass);
				liListText = document.createTextNode(data.scrollText[i][j].liListText);
				anchor.appendChild(liListText);
				liList.appendChild(anchor);
				ulContainer.appendChild(liList);
			}
			divContainer.appendChild(ulContainer);
		}
		for(var z = 0; z < data.wrapperId.length; z++) {
			document.getElementById(data.wrapperId[z]).appendChild(divContainer);	
		}
		
	};
};