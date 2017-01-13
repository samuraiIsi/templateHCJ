var tables = function(){
	var divParent, textParent;
	divParent = document.createElement('p');
	textParent = document.createTextNode('Hola');
	divParent.appendChild(textParent);

	//document.getElementById('container-wrappers-1').className = 'view-container bg-white-100';
    var removeArticles = document.getElementById('container-wp-2');
    removeArticles.remove(removeArticles.selectedIndex);
    var insertSearch = document.getElementById('container-wrappers-2');
    insertSearch.insertBefore(divParent, insertSearch.childNodes[0]); 
};