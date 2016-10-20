var raceEvListHttps = new XMLHttpRequest();
var urlbanners = "../../../data/raceEvents.json";

raceEvListHttps.onreadystatechange = function() {
    if (raceEvListHttps.readyState == 4 && raceEvListHttps.status == 200) {
        var info = JSON.parse(raceEvListHttps.responseText);
        raceEvList(info);
    }
};

raceEvListHttps.open("GET", urlbanners, true);
raceEvListHttps.send();

var s, i, j;

function raceEvList(data) {
    var divBgModel, sectionRE, headerRE, h4RE, h4REText, aRE, iconRE, aLinkPA, aLinkPAText;
    var articleRE, divNumbColm, spanNumColm, pNumbColm, divImgNumb, imgNumb, spanNumb, divDescription, titleDesc, aDesc, listParent, listChildTitle, listChildDesc, divBtn, aBtn, aBtnText;
    for (s = 0; s < data.tabs.length; s++) {
    divBgModel = document.createElement('div');
    divBgModel.setAttribute('id', data.tabs[s].divBgModeId);
    divBgModel.setAttribute('class', data.tabs[s].divBgModeClass);
    sectionRE = document.createElement('section');
    sectionRE.setAttribute('id', data.tabs[s].cityNameObj);
    sectionRE.setAttribute('class', data.tabs[s].sectionClass);
    headerRE = document.createElement('header');
    headerRE.setAttribute('class', data.tabs[s].headerClass);
    h4RE = document.createElement('h4');
    h4REText = document.createTextNode(data.tabs[s].h4Text);
    iconEL = document.createElement('i');
    iconEL.setAttribute('class', data.tabs[s].iconClass);
    h4RE.appendChild(h4REText);
    h4RE.appendChild(iconEL);
    headerRE.appendChild(h4RE);
    sectionRE.appendChild(headerRE);
    divBgModel.appendChild(sectionRE);
    for (i = 0; i < data.tabs[s].raceEvList.length; ++i) {
        articleRE = document.createElement('article');
        articleRE.setAttribute('class', data.tabs[s].raceEvList[i].articleREClass);
        divNumbColm = document.createElement('div');
        divNumbColm.setAttribute('class', data.tabs[s].raceEvList[i].divNumbColmClass);
        spanNumColm = document.createElement('span');
        spanNumColmText = document.createTextNode(data.tabs[s].raceEvList[i].spanNumColmTxt);
        pNumbColm = document.createElement('p');
        pNumbColm.setAttribute('class', data.tabs[s].raceEvList[i].pNumbColmClass);
        pNumbColmText = document.createTextNode(data.tabs[s].raceEvList[i].pNumbColmTxt);

        divImgNumb = document.createElement('div');
        divImgNumb.setAttribute('class', data.tabs[s].raceEvList[i].divImgNumbClass);
        imgNumb = document.createElement('img');
        imgNumb.setAttribute('src', data.tabs[s].raceEvList[i].imgNumbSrc);
        spanNumb = document.createElement('span');
        spanNumbText = document.createTextNode(data.tabs[s].raceEvList[i].spanNumbTxt);

        divBtn = document.createElement('div');
        divBtn.setAttribute('class', data.tabs[s].raceEvList[i].divBtnClass);
        aBtn = document.createElement('a');
        aBtn.setAttribute('href', data.tabs[s].raceEvList[i].aBtnLink);
        aBtnText = document.createTextNode(data.tabs[s].raceEvList[i].aBtnTxt);

        divDescription = document.createElement('div');
        divDescription.setAttribute('class', data.tabs[s].raceEvList[i].divDescriptionClass);
        titleDesc = document.createElement('h3');
        aDesc = document.createElement('a');
        aDesc.setAttribute('href', data.tabs[s].raceEvList[i].aDescLink);
        aDescText = document.createTextNode(data.tabs[s].raceEvList[i].aDescTxt);
        listParent = document.createElement('dl');
        for (j = 0; j < data.tabs[s].raceEvList[i].descList.length; j++) {
            listChildTitle = document.createElement('dt');
            listChildTitleText = document.createTextNode(data.tabs[s].raceEvList[i].descList[j].listChildTitleTxt);
            listChildTitle.appendChild(listChildTitleText);
            listParent.appendChild(listChildTitle);

            listChildDesc = document.createElement('dd');
            listChildDescText = document.createTextNode(data.tabs[s].raceEvList[i].descList[j].listChildDescTxt);
            listChildDesc.appendChild(listChildDescText);
            listParent.appendChild(listChildDesc);
        }
        spanNumColm.appendChild(spanNumColmText);
        pNumbColm.appendChild(pNumbColmText);
        divNumbColm.appendChild(spanNumColm);
        divNumbColm.appendChild(pNumbColm);

        spanNumb.appendChild(spanNumbText);
        divImgNumb.appendChild(imgNumb);
        divImgNumb.appendChild(spanNumb);

        aDesc.appendChild(aDescText);
        titleDesc.appendChild(aDesc);
        divDescription.appendChild(titleDesc);
        divDescription.appendChild(listParent);

        aBtn.appendChild(aBtnText);
        divBtn.appendChild(aBtn);

        articleRE.appendChild(divNumbColm);
        articleRE.appendChild(divImgNumb);
        articleRE.appendChild(divDescription);
        articleRE.appendChild(divBtn);
        sectionRE.appendChild(articleRE);

    }


    divBgModel.appendChild(sectionRE);
    document.getElementById('wrapper2').appendChild(divBgModel);
    }
}

function init() {
    raceEvList();
}
