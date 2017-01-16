function bodyFunction() {
	var sectionComp, articleComp1, articleComp2, divListBtns, i, numberContainerWrappers = 6, insertListBtns;
	
	divListBtns = document.createElement('div');
	divListBtns.setAttribute('id', 'listBtnsGroupCircles');
	
	document.getElementById('bodyContainer').className = "container";
	insertListBtns = document.getElementById('bodyContainer');
	insertListBtns.appendChild(divListBtns, insertListBtns.childNodes[0]);

	for (i = 0; i < numberContainerWrappers; i++) {
		sectionComp = document.createElement('section');
		sectionComp.setAttribute('id', 'container-wrappers-' + [i]);
		sectionComp.setAttribute('class', 'view-container');

		document.getElementById('bodyContainer').appendChild(sectionComp);
	}
}