function headerFunction() {
	var divParent, divSubParent, divChild, btnMenuIcon, h1Logo;
	divParent = document.createElement('div');
	divParent.setAttribute('class', 'row bg-blue-dark-27');
	divSubParent = document.createElement('div');
	divSubParent.setAttribute('id', 'headerL1');
	divSubParent.setAttribute('class', 'container flex-container');
	divChildFirst = document.createElement('div');
	divChildFirst.setAttribute('class', 'btn-respons-menu hidden-md');
	btnMenuIcon = document.createElement("A");
	btnMenuIconText = document.createTextNode("☰");
	btnMenuIcon.setAttribute("href", "javascript:void(0);");
	h1Logo = document.createElement('h1');
	h1Logo.setAttribute('class', 'logo-header');
	divLogoFirst = document.createElement('div');
	divLogoFirst.setAttribute('id', 'logoHeader');
	divLogoSecond = document.createElement('div');
	divLogoSecond.setAttribute('id', 'btnBetting');
	divLogoSecond.setAttribute('class', 'btn btn--login pull-right hidden-sm');
	divChildSecond = document.createElement('div');
	divChildSecond.setAttribute('id', 'loginArea');
	divChildSecond.setAttribute('class', 'row flex-container push-right row--sm');

	btnMenuIcon.appendChild(btnMenuIconText);
	divChildFirst.appendChild(btnMenuIcon);
	h1Logo.appendChild(divLogoFirst);
	h1Logo.appendChild(divLogoSecond);
	divSubParent.appendChild(divChildFirst);
	divSubParent.appendChild(h1Logo);
	divSubParent.appendChild(divChildSecond);
	divParent.appendChild(divSubParent);
	
	document.getElementById('headerContainer').appendChild(divParent);
}

function subHeaderFunction() {
	var divParent, divSubParent, divChild;
	divParent = document.createElement('div');
	divParent.setAttribute('id', 'subHeader');
	divParent.setAttribute('class', 'row bg-blue-dark-18');
	divSubParent = document.createElement('div');
	divSubParent.setAttribute('id', 'subHeaderChild');
	divSubParent.setAttribute('class', 'container flex-container-sp-btw');
	divChild = document.createElement('div');
	divChild.setAttribute('class', 'flex-container');
	divChild.setAttribute('id', 'subHeaderChildFirst');
	divSubParent.appendChild(divChild);
	divParent.appendChild(divSubParent);

	document.getElementById('headerContainer').appendChild(divParent);
}