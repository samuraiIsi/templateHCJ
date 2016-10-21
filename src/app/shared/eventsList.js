var eventsList, eventsListHttps;
eventsListHttps = new XMLHttpRequest();
var urlbanners = "../../../data/eventsList.json";

eventsListHttps.onreadystatechange = function() {
    if (eventsListHttps.readyState == 4 && eventsListHttps.status == 200) {
        var info = JSON.parse(eventsListHttps.responseText);
        eventsList(info);
    }
};

eventsListHttps.open("GET", urlbanners, true);
eventsListHttps.send();

var z, s, i, j, k, count;
var count = 0;
eventsList = function(data) {
    var divEL, headerEL, h4EL, h4ELText, aEL, iconEL, aLinkPA, aLinkPAText, sectionEL, headerSEL, h4SEL, h4SELText, asideEL, pAEL, articleEL, ulAr, liAr, liArText, divBtnGroupEL, divSidesRG, divSidesLf, divBtn, aBtn, aBtnText, iconBtn, divSides;
    for (s = 0; s < data.tabs.length; s++) {
        divELVertParent = document.createElement('div');
        divELVertParent.setAttribute('id', data.tabs[s].idDivELVertParent.divId);
        divELVertParent.setAttribute('class', data.tabs[s].idDivELVertParent.divClass);
        for (i = 0; i < data.tabs[s].eventsList.length; i++) {
            divEL = document.createElement('div');
            divEL.setAttribute('id', data.tabs[s].eventsList[i].idDiv);
            headerEL = document.createElement('header');
            headerEL.setAttribute('class', data.tabs[s].eventsList[i].headerClass);
            headerEL.setAttribute('onclick', 'toogleBtnDropDown(this)');
            h4EL = document.createElement('h4');
            h4EL.setAttribute('class', data.tabs[s].eventsList[i].h4Class)
            h4ELText = document.createTextNode(data.tabs[s].eventsList[i].h4Text);
            h4EL.appendChild(h4ELText);
            headerEL.appendChild(h4EL);

            sectionEL = document.createElement('section');
            sectionEL.setAttribute('class', data.tabs[s].eventsList[i].sectionClass);
            headerSEL = document.createElement('header');
            headerSEL.setAttribute('class', data.tabs[s].eventsList[i].headerSClass);
            h4SEL = document.createElement('h4');
            h4SELText = document.createTextNode(data.tabs[s].eventsList[i].h4SText);
            h4SEL.appendChild(h4SELText);
            headerSEL.appendChild(h4SEL);
            sectionEL.appendChild(headerSEL);

            asideEL = document.createElement('aside');
            asideEL.setAttribute('class', data.tabs[s].eventsList[i].asideClass);
            pAEL = document.createElement('p');
            pAELText = document.createTextNode(data.tabs[s].eventsList[i].pAText);
            pAEL.appendChild(pAELText);
            aLinkPA = document.createElement('a');
            aLinkPA.setAttribute('href', data.tabs[s].eventsList[i].aLinkPAV);
            aLinkPA.setAttribute('target', data.tabs[s].eventsList[i].aLinkTargetPAV);
            aLinkPAText = document.createTextNode(data.tabs[s].eventsList[i].aLinkPAVText);
            aLinkPA.appendChild(aLinkPAText);
            pAEL.appendChild(aLinkPA);
            asideEL.appendChild(pAEL);
            sectionEL.appendChild(asideEL);

            articleEL = document.createElement('article');
            ulAr = document.createElement('ul');
            ulAr.setAttribute('class', data.tabs[s].eventsList[i].ulArClass);
            for (j = 0; j < data.tabs[s].eventsList[i].liArList.length; j++) {
                liAr = document.createElement('li');
                liAr.setAttribute('class', data.tabs[s].eventsList[i].liArList[j].liArListClass);
                liArText = document.createTextNode(data.tabs[s].eventsList[i].liArList[j].liArListText);
                spanAr = document.createElement('span');
                spanArText = document.createTextNode(data.tabs[s].eventsList[i].liArList[j].spanArText);
                spanAr.appendChild(spanArText);
                liAr.appendChild(spanAr);
                ulAr.appendChild(liAr);
            }
            articleEL.appendChild(ulAr);
            sectionEL.appendChild(articleEL);

            divBtnGroupEL = document.createElement('div');
            divBtnGroupEL.setAttribute('class', data.tabs[s].eventsList[i].divBtnGroupELClass);
            divSidesRG = document.createElement('div');
            divSidesLf = document.createElement('div');
            divSidesRG.setAttribute('class', data.tabs[s].eventsList[i].divBtnSidesELClass.divBtnSLfELClass);
            divSidesLf.setAttribute('class', data.tabs[s].eventsList[i].divBtnSidesELClass.divBtnSRgELClass);

            for (t = 0; t < data.tabs[s].eventsList[i].divBtnListEL.length; t++) {
                divBtn = document.createElement('div');
                divBtn.setAttribute('class', data.tabs[s].eventsList[i].divBtnListEL[t].divBtnClass);
                aBtn = document.createElement('button');
                aBtn.setAttribute('href', data.tabs[s].eventsList[i].divBtnListEL[t].aBtnLink);
                aBtn.setAttribute('class', 'btnMed');
                aBtn.setAttribute('onclick', 'openPanel' + '(' + 'event' + ', ' + "'" + data.tabs[s].eventsList[i].divBtnListEL[t].aPanelId + "'" + ')');
                aBtnText = document.createTextNode(data.tabs[s].eventsList[i].divBtnListEL[t].aBtnText);
                iconBtn = document.createElement('i');
                iconBtn.setAttribute('class', data.tabs[s].eventsList[i].divBtnListEL[t].iconBtnClass);
                aBtn.appendChild(aBtnText);
                aBtn.appendChild(iconBtn);
                if (data.tabs[s].eventsList[i].divBtnListEL[t / 2]) {
                    divSidesRG.appendChild(aBtn);
                } else {
                    divSidesLf.appendChild(aBtn);
                }
            }

            divBtnGroupEL.appendChild(divSidesLf);
            divBtnGroupEL.appendChild(divSidesRG);
            articleEL.appendChild(divBtnGroupEL);

            divEL.appendChild(headerEL);
            divEL.appendChild(sectionEL);
            divELVertParent.appendChild(divEL);
        }

        document.getElementById('wrapper1').appendChild(divELVertParent);
    }
};

function init() {
    eventsList();
}
