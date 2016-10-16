var eventsListHttps = new XMLHttpRequest();
var urlbanners = "../../../data/eventsList.json";

eventsListHttps.onreadystatechange = function() {
    if (eventsListHttps.readyState == 4 && eventsListHttps.status == 200) {
        var info = JSON.parse(eventsListHttps.responseText);
        eventsList(info);
    }
};

eventsListHttps.open("GET", urlbanners, true);
eventsListHttps.send();

var i;
var j = 0;

function eventsList(data) {
    var divEL, headerEL, h4EL, h4ELText, aEL, iconEL, aLinkPA, aLinkPAText;
    var sectionEL, headerSEL, h4SEL, h4SELText;
    var asideEL, pAEL, articleEL, ulAr, liAr, liArText;
    var divBtnGroupEL, divSidesRG, divSidesLf, divBtn, aBtn, aBtnText, iconBtn, divSides;
    divELVertParent = document.createElement('div');
    divELVertParent.setAttribute('id', data.idDivELVertParent.divId);
    divELVertParent.setAttribute('class', data.idDivELVertParent.divClass);
    for (i = 0; i < data.eventsList.length; i++) {
        divEL = document.createElement('div');
        divEL.setAttribute('id', data.eventsList[i].idDiv);
        headerEL = document.createElement('header');
        headerEL.setAttribute('class', data.eventsList[i].headerClass);
        h4EL = document.createElement('h4');
        h4ELText = document.createTextNode(data.eventsList[i].h4Text);
        aEL = document.createElement('A');
        aEL.setAttribute('href', data.eventsList[i].aLinkV);
        iconEL = document.createElement('i');
        iconEL.setAttribute('class', data.eventsList[i].iconClass);
        aEL.appendChild(iconEL);
        h4EL.appendChild(h4ELText);
        h4EL.appendChild(aEL);
        headerEL.appendChild(h4EL);

        sectionEL = document.createElement('section');
        sectionEL.setAttribute('class', data.eventsList[i].sectionClass);
        headerSEL = document.createElement('header');
        headerSEL.setAttribute('class', data.eventsList[i].headerSClass);
        h4SEL = document.createElement('h4');
        h4SELText = document.createTextNode(data.eventsList[i].h4SText);
        h4SEL.appendChild(h4SELText);
        headerSEL.appendChild(h4SEL);
        sectionEL.appendChild(headerSEL);

        asideEL = document.createElement('aside');
        asideEL.setAttribute('class', data.eventsList[i].asideClass);
        pAEL = document.createElement('p');
        pAELText = document.createTextNode(data.eventsList[i].pAText);
        pAEL.appendChild(pAELText);
        aLinkPA = document.createElement('a');
        aLinkPA.setAttribute('href', data.eventsList[i].aLinkPAV);
        aLinkPA.setAttribute('target', data.eventsList[i].aLinkTargetPAV);
        aLinkPAText = document.createTextNode(data.eventsList[i].aLinkPAVText);
        aLinkPA.appendChild(aLinkPAText);
        pAEL.appendChild(aLinkPA);
        asideEL.appendChild(pAEL);
        sectionEL.appendChild(asideEL);

        articleEL = document.createElement('article');
        ulAr = document.createElement('ul');
        ulAr.setAttribute('class', data.eventsList[i].ulArClass);
        for (j = 0; j < data.eventsList[i].liArList.length; j++) {
            liAr = document.createElement('li');
            liAr.setAttribute('class', data.eventsList[i].liArList[j].liArListClass);
            liArText = document.createTextNode(data.eventsList[i].liArList[j].liArListText);
            spanAr = document.createElement('span');
            spanArText = document.createTextNode(data.eventsList[i].liArList[j].spanArText);
            spanAr.appendChild(spanArText);
            liAr.appendChild(spanAr);
            ulAr.appendChild(liAr);
        }
        articleEL.appendChild(ulAr);
        sectionEL.appendChild(articleEL);

        divBtnGroupEL = document.createElement('div');
        divBtnGroupEL.setAttribute('class', data.eventsList[i].divBtnGroupELClass);
        divSidesRG = document.createElement('div');
        divSidesLf = document.createElement('div');
        divSidesRG.setAttribute('class', data.eventsList[i].divBtnSidesELClass.divBtnSLfELClass);
        divSidesLf.setAttribute('class', data.eventsList[i].divBtnSidesELClass.divBtnSRgELClass);

        for (t = 0; t < data.eventsList[i].divBtnListEL.length; t++) {
            divBtn = document.createElement('div');
            divBtn.setAttribute('class', data.eventsList[i].divBtnListEL[t].divBtnClass);
            aBtn = document.createElement('a');
            aBtn.setAttribute('href', data.eventsList[i].divBtnListEL[t].aBtnClass);
            aBtnText = document.createTextNode(data.eventsList[i].divBtnListEL[t].aBtnText);
            iconBtn = document.createElement('i');
            iconBtn.setAttribute('class', data.eventsList[i].divBtnListEL[t].iconBtnClass);
            aBtn.appendChild(aBtnText);
            aBtn.appendChild(iconBtn);
            divBtn.appendChild(aBtn);
            if (data.eventsList[i].divBtnListEL[t / 2]) {
                divSidesRG.appendChild(divBtn);
            } else {
                divSidesLf.appendChild(divBtn);
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

function init() {
    eventsList();
}
