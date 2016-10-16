var tabsHttps = new XMLHttpRequest();
var urlbanners = "../../../data/tabs.json";

tabsHttps.onreadystatechange = function() {
    if (tabsHttps.readyState == 4 && tabsHttps.status == 200) {
        var info = JSON.parse(tabsHttps.responseText);
        tabs(info);
    }
};

tabsHttps.open("GET", urlbanners, true);
tabsHttps.send();

var i;

function tabs(data) {
	var ulTabsTwo, liTabsTwo, aTabsTwo;
	ulTabsTwo = document.createElement('ul');
	ulTabsTwo.setAttribute('class', data.navTabsTwoUl.ulClass);
	for (i = 0; i < data.navTabsTwoLi.length; i++) {
		liTabsTwo = document.createElement('li');
		liTabsTwo.setAttribute('class', data.navTabsTwoLi[i].liClass);
		aTabsTwo = document.createElement('a');
		aTabsTwo.setAttribute('href', data.navTabsTwoLi[i].aClass);
		aTabsTwoText = document.createTextNode(data.navTabsTwoLi[i].aText);
		aTabsTwo.appendChild(aTabsTwoText);
		liTabsTwo.appendChild(aTabsTwo);
		ulTabsTwo.appendChild(liTabsTwo);
	}
	
	var ulTabsThree, liTabsThree, aTabsThree;
	ulTabsThree = document.createElement('ul');
	ulTabsThree.setAttribute('class', data.navTabsThreeUl.ulClass);
	for (i = 0; i < data.navTabsThreeLi.length; i++) {
		liTabsThree = document.createElement('li');
		liTabsThree.setAttribute('class', data.navTabsThreeLi[i].liClass);
		aTabsThree = document.createElement('a');
		aTabsThree.setAttribute('href', data.navTabsThreeLi[i].aClass);
		aTabsThreeText = document.createTextNode(data.navTabsThreeLi[i].aText);
		aTabsThree.appendChild(aTabsThreeText);
		liTabsThree.appendChild(aTabsThree);
		ulTabsThree.appendChild(liTabsThree);
	}

	document.getElementById('wrapper1').appendChild(ulTabsTwo);
	document.getElementById('wrapper2').appendChild(ulTabsThree);
}

function init() {
	tabs();
}