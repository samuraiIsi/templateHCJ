var containerWrappers = function() {
	var containerWpsHttps = new XMLHttpRequest();
    var urlcontainerWps = "../../../data/footer.json";

    containerWpsHttps.onreadystatechange = function() {
        if (containerWpsHttps.readyState == 4 && containerWpsHttps.status == 200) {
            var data = JSON.parse(containerWpsHttps.responseText);
            footerFunction(data);
        }
    };

    containerWpsHttps.open("GET", urlcontainerWps, true);
    containerWpsHttps.send();

    var divParent, i;
    function containerWps() {
		for (var i = 0; i < containerWps.length; i++) {
			divParent = document.createElement('div');
			divParent.setAttribute('id', 'container-wp-' + [i]);
			divParent.setAttribute('class', 'flex-container-lg');
			articleComp + [i] = document.createElement('article');
			articleComp + [i].setAttribute('id', 'wrapper' + [i]);
			articleComp + [i].setAttribute('class', 'wrapper-' + [i]);
		}
	}
};