var xmlhttp = new XMLHttpRequest();
var url = "../../../data/logoHeader.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        logoHeader(myArr);
        headerL1(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

var i;

function logoHeader(info) {
    var logoLink, spanLogo;
    logoLink = document.createElement(info.logoBg.crAnchor);
    logoLink.setAttribute(info.logoBg.attLinkN, info.logoBg.attLinkV);
    logoLink.setAttribute(info.logoBg.attClassN, info.logoBg.attClassV);
    spanLogo = document.createElement(info.logoBg.crSpan);
    spanLogo.setAttribute(info.logoBg.attSpanN, info.logoBg.attSpanV);
    logoLink.appendChild(spanLogo);
    document.getElementById('logoHeader').appendChild(logoLink);
}

function headerL1(info) {
    var ulInfoHL1, liInfoHL1, linkHL1, IconHL1;
    ulInfoHL1 = document.createElement('ul');
    ulInfoHL1.setAttribute(info.infoHeaderL1Ul.attClassN, info.infoHeaderL1Ul.attClassV);
    for (i = 0; i < info.infoHeaderL1Il.length; i++) {
        liInfoHL1 = document.createElement('li');
        liInfoHL1.setAttribute(info.infoHeaderL1Il[i].attClassLiN, info.infoHeaderL1Il[i].attClassLiV);
        linkHL1 = document.createElement('a');
        linkHL1.setAttribute(info.infoHeaderL1Il[i].attLinkN, info.infoHeaderL1Il[i].attLinkV);
        IconHL1 = document.createElement('i');
        IconHL1.setAttribute(info.infoHeaderL1Il[i].attIconHL1N, info.infoHeaderL1Il[i].attIconHL1V);
        linkHL1.appendChild(IconHL1);
        liInfoHL1.appendChild(linkHL1);
        ulInfoHL1.appendChild(liInfoHL1);
    }

    document.getElementById('headerL1').appendChild(ulInfoHL1);
}

function init() {
    logoHeader();
    headerL1();
}
