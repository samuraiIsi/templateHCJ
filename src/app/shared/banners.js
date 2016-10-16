var bannersHttps = new XMLHttpRequest();
var urlbanners = "../../../data/banners.json";

bannersHttps.onreadystatechange = function() {
    if (bannersHttps.readyState == 4 && bannersHttps.status == 200) {
        var info = JSON.parse(bannersHttps.responseText);
        bannerMain(info);
    }
};

bannersHttps.open("GET", urlbanners, true);
bannersHttps.send();

var i;

function bannerMain(data) {
	var divBM, divBS, h2BM, h2BMText, docId;
	
	for (i = 0; i < data.bannersMain.length; i++) {
	divBM = document.createElement('div');
	divBM.setAttribute('class', data.bannersMain[i].divMainClass);
	divBS = document.createElement('div');
	divBS.setAttribute('class', data.bannersMain[i].divSecondClass);
	h2BM = document.createElement('h2');
	h2BMText = document.createTextNode(data.bannersMain[i].h2Text);
	h2BM.appendChild(h2BMText);
	divBS.appendChild(h2BM);
	divBM.appendChild(divBS);


	document.getElementById(data.bannersMain[i].docId).appendChild(divBM);
	}
}

function init() {
	bannerMain();
}