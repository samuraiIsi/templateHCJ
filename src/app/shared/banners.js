var bannersComponent = function() {
    var bannersHttps = new XMLHttpRequest();
    var urlbanners = "../../../data/banners.json";

    bannersHttps.onreadystatechange = function() {
        if (bannersHttps.readyState == 4 && bannersHttps.status == 200) {
            var info = JSON.parse(bannersHttps.responseText);
            bannerMain(info);
        }
    };

    bannersHttps.open("GET", urlbanners, true);
    bannersHttps.send();

    var i;

    function bannerMain(data) {
        var divBM, divBS, h2BM, h2BMText, docId, insertBanner;

        for (i = 0; i < data.bannersMain.length; i++) {
            divBM = document.createElement('div');
            divBM.setAttribute('id', data.bannersMain[i].divMainId);
            divBM.setAttribute('class', data.bannersMain[i].divMainClass);
            divBS = document.createElement('div');
            divBS.setAttribute('class', data.bannersMain[i].divSecondClass);
            h2BM = document.createElement('h2');
            iconEl = document.createElement('i');
            iconEl.setAttribute('class', data.bannersMain[i].iClass);
            iconEl.addEventListener('click', eval(data.bannersMain[i].iMethod));
            h2BMText = document.createTextNode(data.bannersMain[i].h2Text);
            if(data.bannersMain[i].iClass != "") h2BM.appendChild(iconEl);
            h2BM.appendChild(h2BMText);
            divBS.appendChild(h2BM);
            divBM.appendChild(divBS);

            insertBanner = document.getElementById(data.bannersMain[i].wrapperId);
            insertBanner.insertBefore(divBM, insertBanner.childNodes[0]);
        }
    }
}
