function headerFunction() {
	var divParent = document.createElement('div');
	divParent.setAttribute('class', 'container flex-container');
	var divChild = document.createElement('div');
	divChild.setAttribute('class', 'btn-respons-menu hidden-md');
	var btnMenuIcon = document.createElement("A");
	btnMenuIconText = document.createTextNode("☰");
	btnMenuIcon.setAttribute("href", "javascript:void(0);");
	btnMenuIcon.appendChild(btnMenuIconText);
	divChild.appendChild(btnMenuIcon);
	divParent.appendChild(divChild);
	document.getElementById('header').appendChild(divParent);
}