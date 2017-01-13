function bodyFunction() {
	var sectionComp, articleComp1, articleComp2, divListBtns, i, numberContainerWrappers = 3, insertListBtns;
	
	divListBtns = document.createElement('div');
	divListBtns.setAttribute('id', 'listBtnsGroupCircles');
	
	document.getElementById('bodyContainer').className = "container";
	insertListBtns = document.getElementById('bodyContainer');
	insertListBtns.appendChild(divListBtns, insertListBtns.childNodes[0]);

	for (i = 0; i < numberContainerWrappers; i++) {
		sectionComp = document.createElement('section');
		sectionComp.setAttribute('id', 'container-wrappers-' + [i]);
		sectionComp.setAttribute('class', 'view-container');
		divParent = document.createElement('div');
		divParent.setAttribute('id', 'container-wp-' + [i]);
		divParent.setAttribute('class', 'flex-container-lg');
		articleComp1 = document.createElement('article');
		articleComp1.setAttribute('id', 'wrapper1');
		articleComp1.setAttribute('class', 'wrapper-1');
		articleComp2 = document.createElement('article');
		articleComp2.setAttribute('id', 'wrapper2');
		articleComp2.setAttribute('class', 'wrapper-2');
		divParent.appendChild(articleComp1);
		divParent.appendChild(articleComp2);
		sectionComp.appendChild(divParent);

		document.getElementById('bodyContainer').appendChild(sectionComp);
	}

}