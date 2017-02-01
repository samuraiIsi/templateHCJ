var containerWps = function() {
    var containerWpsHttps = new XMLHttpRequest();
    var urlcontainerWps = "../../../data/containerWrappers.json";

    containerWpsHttps.onreadystatechange = function() {
        if (containerWpsHttps.readyState == 4 && containerWpsHttps.status == 200) {
            var data = JSON.parse(containerWpsHttps.responseText);
            containerWpsSub(data);
        }
    };

    containerWpsHttps.open("GET", urlcontainerWps, true);
    containerWpsHttps.send();

    function containerWpsSub(data) {
        var divParent, articleComp;
        for (var i = 0; i < data.containerWps.length; i++) {
            divParent = document.createElement('div');
            divParent.setAttribute('id', 'container-wp-' + data.containerWps[i].containerId);
            divParent.setAttribute('class', 'flex-container-lg');
            for (var j = 0; j < data.containerWps[i].classAmount.length; j++) {
                articleComp = document.createElement('article');
                articleComp.setAttribute('id', 'wrapper' + data.containerWps[i].wrapperId[j]);
                articleComp.setAttribute('class', 'wrapper-' + data.containerWps[i].classAmount[j]);
                divParent.appendChild(articleComp);
            }
            document.getElementById('container-wrappers-' + data.containerWps[i].containerId).appendChild(divParent);
        }
    }
};