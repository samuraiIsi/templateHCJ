function bodyFunction() {
	var sectionComp, articleComp1, articleComp2, divListBtns;
	sectionComp = document.createElement('section');
	sectionComp.setAttribute('class', 'flex-container-lg');
	divListBtns = document.createElement('div');
	divListBtns.setAttribute('id', 'listBtnsGroupCircles');
	articleComp1 = document.createElement('article');
	articleComp1.setAttribute('id', 'wrapper1');
	articleComp1.setAttribute('class', 'wrapper-1');
	articleComp2 = document.createElement('article');
	articleComp2.setAttribute('id', 'wrapper2');
	articleComp2.setAttribute('class', 'wrapper-2');
	sectionComp.appendChild(articleComp1);
	sectionComp.appendChild(articleComp2);
	
	document.getElementById('bodyContainer').className = "container";
	document.getElementById('bodyContainer').appendChild(divListBtns);
	document.getElementById('bodyContainer').appendChild(sectionComp);
}