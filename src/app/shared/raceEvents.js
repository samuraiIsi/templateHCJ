var raceEvListHttps = new XMLHttpRequest();
var urlbanners = "../../../data/raceEvents.json";

raceEvListHttps.onreadystatechange = function() {
    if (raceEvListHttps.readyState == 4 && raceEvListHttps.status == 200) {
        var info = JSON.parse(raceEvListHttps.responseText);
        raceEvList(info);
    }
};

raceEvListHttps.open("GET", urlbanners, true);
raceEvListHttps.send();

var i;

function raceEvList(data) {
	var divBgModel, sectionRE, headerRE, h4RE, h4REText, aRE, iconRE, aLinkPA, aLinkPAText;
	var articleRE;
	divBgModel = document.createElement('div');
	divBgModel.setAttribute('id', data.divBgModeId);
	divBgModel.setAttribute('class', data.divBgModeClass);
	sectionRE = document.createElement('section');
	sectionRE.setAttribute('class', data.sectionClass);
	headerRE = document.createElement('header');
	headerRE.setAttribute('class', data.headerClass);
	h4RE = document.createElement('h4');
	h4REText = document.createTextNode(data.h4Text);
	iconEL = document.createElement('i');
	iconEL.setAttribute('class', data.iconClass);
	h4RE.appendChild(h4REText);
	h4RE.appendChild(iconEL);
	headerRE.appendChild(h4RE);
	sectionRE.appendChild(headerRE);
	divBgModel.appendChild(sectionRE);
	
	for (i = 0; i < data.raceEvList.length; i++) {
		articleRE = document.createElement('article');
		
		
	}

	document.getElementById('raceList').appendChild(divBgModel);

}

function init() {
	raceEvList();
}