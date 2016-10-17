var footerHttps = new XMLHttpRequest();
var urlfooter = "../../../data/footer.json";

footerHttps.onreadystatechange = function() {
    if (footerHttps.readyState == 4 && footerHttps.status == 200) {
        var data = JSON.parse(footerHttps.responseText);
        footerFunction(data);
    }
};

footerHttps.open("GET", urlfooter, true);
footerHttps.send();

var i;

function footerFunction(data) {
    var divParent, pAuthor, aAuthor, aAuthortext, spanAuthor, spanAuthorText, ulFooterList, liFooterList, liFooterListText;
    divParent = document.createElement('div');
    divParent.setAttribute('class', data.divParentClass);
    pAuthor = document.createElement('p');
    pAuthor.setAttribute('class', data.pAuthorClass);
    aAuthor = document.createElement('a');
    aAuthor.setAttribute('href', data.linkSiteAuthor);
    aAuthortext = document.createTextNode(data.aAuhtorText);
    spanAuthor = document.createElement('span');
    spanAuthorText = document.createTextNode(data.spanAuhtorText);
    ulFooterList = document.createElement('ul');
    ulFooterList.setAttribute('class', data.ulFooterListClass);
    for (i = 0; i < data.footerList.length; i++) {
        liFooterList = document.createElement('li');
        liFooterListText = document.createTextNode(data.footerList[i]);
        liFooterList.appendChild(liFooterListText);
        ulFooterList.appendChild(liFooterList);

    }


    aAuthor.appendChild(aAuthortext);
    spanAuthor.appendChild(spanAuthorText);
    aAuthor.appendChild(spanAuthor);
    pAuthor.appendChild(aAuthor);
    divParent.appendChild(pAuthor);
    divParent.appendChild(ulFooterList);

    document.getElementById('footerContainer').appendChild(divParent);
}

function init() {
    footerFunction();
}
