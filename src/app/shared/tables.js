var tables = function(){
	var divParent, textParent;
	divParent = document.createElement('p');
	textParent = document.createTextNode('Hola');
	divParent.appendChild(textParent);

	document.getElementById('container-wrappers-2').appendChild(divParent);
};