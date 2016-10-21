var tabsHttps = new XMLHttpRequest();
var urlbanners = "../../../data/tabs.json";

tabsHttps.onreadystatechange = function() {
    if (tabsHttps.readyState == 4 && tabsHttps.status == 200) {
        var info = JSON.parse(tabsHttps.responseText);
        tabs(info);
    }
};

tabsHttps.open("GET", urlbanners, true);
tabsHttps.send();

var i, j, insertPanelTwo, insertPanelOne;

function tabs(data) {
    var ulTabsTwo, liTabsTwo, aTabsTwo;
    ulTabsTwo = document.createElement('ul');
    ulTabsTwo.setAttribute('class', data.navTabsTwoUl.ulClass);
    for (i = 0; i < data.navTabsTwoLi.length; i++) {
        liTabsTwo = document.createElement('li');
        aTabsTwo = document.createElement('a');
        aTabsTwo.setAttribute('href', data.navTabsTwoLi[i].aLink);
        aTabsTwo.setAttribute('class', data.navTabsTwoLi[i].aClass);
        aTabsTwo.setAttribute('onclick', 'openTab' + '(' + 'event' + ', ' + "'" + data.navTabsTwoLi[i].city + "'" + ')');
        aTabsTwoText = document.createTextNode(data.navTabsTwoLi[i].aText);
        aTabsTwo.appendChild(aTabsTwoText);
        liTabsTwo.appendChild(aTabsTwo);
        ulTabsTwo.appendChild(liTabsTwo);
    }

    var ulTabsThree, liTabsThree, aTabsThree;

    for (i = 0; i < data.navTabsThreeLi.length; i++) {
        ulTabsThree = document.createElement('ul');
        ulTabsThree.setAttribute('class', data.navTabsThreeUl.ulClass);
        for (j = 0; j < data.navTabsThreeLi[i].length; j++) {
            liTabsThree = document.createElement('li');
            aTabsThree = document.createElement('a');
            aTabsThree.setAttribute('href', data.navTabsThreeLi[i][j].aLink);
            aTabsThree.setAttribute('class', data.navTabsThreeLi[i][j].aClass);
            aTabsThree.setAttribute('onclick', 'openTab' + '(' + 'event' + ', ' + "'" + data.navTabsThreeLi[i][j].city + "'" + ')');
            aTabsThreeText = document.createTextNode(data.navTabsThreeLi[i][j].aText);
            aTabsThree.appendChild(aTabsThreeText);
            liTabsThree.appendChild(aTabsThree);
            ulTabsThree.appendChild(liTabsThree);
            insertPanelTwo = document.getElementById('panel-' + [i]);
            insertPanelTwo.insertBefore(ulTabsThree, insertPanelTwo.childNodes[0]);
        }
    }
    insertPanelOne = document.getElementById('wrapper1');
    insertPanelOne.insertBefore(ulTabsTwo, insertPanelOne.childNodes[1]);
}

function init() {
    tabs();
}
