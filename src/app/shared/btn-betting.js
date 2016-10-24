var xmlhttps = new XMLHttpRequest();
var url1 = "../../../data/buttons.json";

xmlhttps.onreadystatechange = function() {
    if (xmlhttps.readyState == 4 && xmlhttps.status == 200) {
        var myArr = JSON.parse(xmlhttps.responseText);
        btnBackArrow(myArr);
        btnHorse(myArr);
        btnVertical(myArr);
        listBtnCircles(myArr)
    }
};

xmlhttps.open("GET", url1, true);
xmlhttps.send();

var i;

function btnBetting() {
	var spanBet, btnBet, icon;
	btnBet = document.createElement("A");
	btnBet.setAttribute("href", "#");
	btnBet.setAttribute('class', 'pull-left');
	spanBet = document.createElement('span');
	spanBetText = document.createTextNode('Betting');
	spanBet.appendChild(spanBetText);
	icon = document.createElement("i");
	icon.setAttribute('class', 'fs0 icon-select');
	btnBet.appendChild(spanBet);
	btnBet.appendChild(icon);
	document.getElementById('btnBetting').appendChild(btnBet);
}

function btnsLoginArea() {
	var divLogin, linkLogin, linkLoginText, iconLinkLogin;
	divLogin = document.createElement('div');
	divLogin.setAttribute('class', 'btn btn--login hidden-sm');
	linkLogin = document.createElement('A');
	linkLogin.setAttribute('href', '#');
	linkLogin.setAttribute('onclick', 'openLoginModal()');
	linkLoginText = document.createTextNode('Login');
	linkLogin.appendChild(linkLoginText);
	iconLinkLogin = document.createElement('i');
	iconLinkLogin.setAttribute('class', 'fs0 icon-expanded');
	divLogin.appendChild(linkLogin);
	divLogin.appendChild(iconLinkLogin);
	document.getElementById('loginArea').appendChild(divLogin);

	var divLoginHead, linkLoginHead, linkLoginHeadText;
	divLoginHead = document.createElement('div');
	divLoginHead.setAttribute('class', 'btn--circle btn--circle--sm btn--login--sm hidden-md');
	divLoginHead.setAttribute('onclick', 'openLoginModal()');
	linkLoginHead = document.createElement('A');
	linkLoginHead.setAttribute('href', '#');
	//linkLoginHeadText = document.createTextNode('Login');
	//linkLoginHead.appendChild(linkLoginHeadText);
	iconLoginHead = document.createElement('i');
	iconLoginHead.setAttribute('class', 'fs11 icon-login-head');
	divLoginHead.appendChild(linkLoginHead);
	divLoginHead.appendChild(iconLoginHead);
	document.getElementById('loginArea').appendChild(divLoginHead);

	var divJoin;
	divJoin = document.createElement('div');
	divJoin.setAttribute('class', 'btn btn--join');
	linkJoin = document.createElement('A');
	linkJoin.setAttribute('href', '#');
	linkJoinText = document.createTextNode('Join');
	linkJoin.appendChild(linkJoinText);
	divJoin.appendChild(linkJoin);
	document.getElementById('loginArea').appendChild(divJoin);
}

function btnBackArrow(data) {
	var divBtBk, linkBtBk, iconBtBk;
	divBtBk = document.createElement('div');
	divBtBk.setAttribute('class', data.btnBkAr.divClass);
	linkBtBk = document.createElement('A');
	linkBtBk.setAttribute('href', data.btnBkAr.linkAtt);
	iconBtBk = document.createElement('i');
	iconBtBk.setAttribute('class', data.btnBkAr.iconClass);
	linkBtBk.appendChild(iconBtBk);
	divBtBk.appendChild(iconBtBk);
	document.getElementById('subHeaderChildFirst').appendChild(divBtBk);
}

function btnHorse(data) { // Rename to btnHorizontal
	var divBtnH, iconBtnH, spanBtnH, spanBtnHText;
	divBtnH = document.createElement('div');
	divBtnH.setAttribute('class', data.btnHorse.divClass);
	iconBtnH = document.createElement('i');
	iconBtnH.setAttribute('class', data.btnHorse.iconClass);
	spanBtnH = document.createElement('span');
	spanBtnH.setAttribute('class', data.btnHorse.spanClass);
	spanBtnHText = document.createTextNode(data.btnHorse.spanText);
	spanBtnH.appendChild(spanBtnHText);
	divBtnH.appendChild(iconBtnH);
	divBtnH.appendChild(spanBtnH);
	document.getElementById('subHeaderChildFirst').appendChild(divBtnH);
}

function btnVertical(data) {
	var divBtnVert, iconBtnVert, pBtnVert, pBtnVertText;
	divBtnVertParent = document.createElement('div');
	divBtnVertParent.setAttribute('id', data.btnVerticalDivParent.divId);
	divBtnVertParent.setAttribute('class', data.btnVerticalDivParent.divClass);
	for (i = 0; i < data.btnVerticalinf.length; i++) {
		divBtnVert = document.createElement('div');		
		divBtnVert.setAttribute('class', data.btnVerticalinf[i].divClass);
		linkBtBk = document.createElement('A');
		linkBtBk.setAttribute('href', data.btnVerticalinf[i].linkAtt);
		iconBtnVert = document.createElement('i');
		iconBtnVert.setAttribute('class', data.btnVerticalinf[i].iconClass);
		pBtnVert = document.createElement('p');
		pBtnVert.setAttribute('class', data.btnVerticalinf[i].pClass);
		pBtnVertText = document.createTextNode(data.btnVerticalinf[i].pText);
		pBtnVert.appendChild(pBtnVertText);
		linkBtBk.appendChild(iconBtnVert);
		linkBtBk.appendChild(pBtnVert);
		divBtnVert.appendChild(linkBtBk);
		divBtnVertParent.appendChild(divBtnVert);	
	}
	document.getElementById('subHeaderChild').appendChild(divBtnVertParent);
}

function listBtnCircles(info) {
	var ulBC, liBC, aBC, divBC, iconBC, pBC;
	ulBC = document.createElement('ul');
	ulBC.setAttribute('class', info.listBtnCirclesUlData.ulClass);
	for (i = 0; i < info.listBtnCirclesLiData.length; i++) {
		liBC = document.createElement('li');
		liBC.setAttribute('class', info.listBtnCirclesLiData[i].liClass);
		aBC = document.createElement('a');
		aBC.setAttribute('href', info.listBtnCirclesLiData[i].aClass);
		divBC = document.createElement('div');
		divBC.setAttribute('class', info.listBtnCirclesLiData[i].divClass)
		iconBC = document.createElement('i');
		iconBC.setAttribute('class', info.listBtnCirclesLiData[i].iconClass);
		pBC = document.createElement('p');
		pBC.setAttribute('class', info.listBtnCirclesLiData[i].pClass);
		pBCText = document.createTextNode(info.listBtnCirclesLiData[i].pText);
		pBC.appendChild(pBCText);
		divBC.appendChild(iconBC);
		divBC.appendChild(pBC);
		aBC.appendChild(divBC);
		liBC.appendChild(aBC);
		ulBC.appendChild(liBC);
	}
	document.getElementById('listBtnsGroupCircles').appendChild(ulBC);
}

function init() {
	btnBackArrow();
	btnHorse();
	btnVertical();
	listBtnCircles();
}