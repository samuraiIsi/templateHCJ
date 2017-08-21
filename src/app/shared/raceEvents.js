var raceEvents = function() {
    var raceEvListHttps = new XMLHttpRequest();
    var urlbanners = "../../../data/raceEvents.json";

    raceEvListHttps.onreadystatechange = function() {
        if (raceEvListHttps.readyState == 4 && raceEvListHttps.status == 200) {
            var info = JSON.parse(raceEvListHttps.responseText);
            raceEvList(info);
            tabsComponent();
        }
    };

    raceEvListHttps.open("GET", urlbanners, true);
    raceEvListHttps.send();

    var z, s, i, j, ev;

    function raceEvList(data) {
        var articleComp2, divBgModel, sectionRE, headerRE, h4RE, h4REText, aRE, iconRE, aLinkPA, aLinkPAText;
        var articleRE, divNumbColm, spanNumColm, pNumbColm, divImgNumb, imgNumb, spanNumb, divDescription, titleDesc, aDesc, listParent, listChildTitle, listChildDesc, divBtn, aBtn, aBtnText;
        for (s = 0; s < data.tabs.length; s++) {
            divBgModelParent = document.createElement('div');
            divBgModelParent.setAttribute('id', 'panel-' + [s]);
            divBgModelParent.setAttribute('class', 'panel');
            for (z = 0; z < data.tabs[s].length; z++) {
                divBgModel = document.createElement('div');
                divBgModel.setAttribute('id', data.tabs[s][z].divBgModeId);
                divBgModel.setAttribute('class', data.tabs[s][z].divBgModeClass);
                sectionRE = document.createElement('section');
                sectionRE.setAttribute('id', data.tabs[s][z].cityNameObj);
                sectionRE.setAttribute('class', data.tabs[s][z].sectionClass);
                headerRE = document.createElement('header');
                headerRE.setAttribute('class', data.tabs[s][z].headerClass);
                h4RE = document.createElement('h4');
                h4REText = document.createTextNode(data.tabs[s][z].h4Text);
                iconEL = document.createElement('i');
                iconEL.setAttribute('class', data.tabs[s][z].iconClass);
                h4RE.appendChild(h4REText);
                h4RE.appendChild(iconEL);
                headerRE.appendChild(h4RE);
                sectionRE.appendChild(headerRE);
                divBgModel.appendChild(sectionRE);
                divBgModelParent.appendChild(divBgModel);
                for (i = 0; i < data.tabs[s][z].raceEvList.length; ++i) {
                    articleRE = document.createElement('article');
                    articleRE.setAttribute('class', data.tabs[s][z].raceEvList[i].articleREClass);
                    divNumbColm = document.createElement('div');
                    divNumbColm.setAttribute('class', data.tabs[s][z].raceEvList[i].divNumbColmClass);
                    spanNumColm = document.createElement('span');
                    spanNumColmText = document.createTextNode(data.tabs[s][z].raceEvList[i].spanNumColmTxt);
                    pNumbColm = document.createElement('p');
                    pNumbColm.setAttribute('class', data.tabs[s][z].raceEvList[i].pNumbColmClass);
                    pNumbColmText = document.createTextNode(data.tabs[s][z].raceEvList[i].pNumbColmTxt);

                    divImgNumb = document.createElement('div');
                    divImgNumb.setAttribute('class', data.tabs[s][z].raceEvList[i].divImgNumbClass);
                    imgNumb = document.createElement('img');
                    imgNumb.setAttribute('src', data.tabs[s][z].raceEvList[i].imgNumbSrc);
                    spanNumb = document.createElement('span');
                    spanNumbText = document.createTextNode(data.tabs[s][z].raceEvList[i].spanNumbTxt);

                    divBtn = document.createElement('button');
                    divBtn.setAttribute('class', data.tabs[s][z].raceEvList[i].divBtnClass);
                    divBtn.setAttribute('href', '#');
                    divBtn.onclick =  (function() { return function() {counter(this);}})();
                    divBtn.setAttribute('id', 'raceEventsBtn-' + [s] + [z] + [i]);
                    aBtnText = document.createTextNode(data.tabs[s][z].raceEvList[i].aBtnTxt);
                    divDescription = document.createElement('div');
                    divDescription.setAttribute('class', data.tabs[s][z].raceEvList[i].divDescriptionClass);
                    titleDesc = document.createElement('h3');
                    aDesc = document.createElement('a');
                    aDesc.setAttribute('href', data.tabs[s][z].raceEvList[i].aDescLink);
                    aDescText = document.createTextNode(data.tabs[s][z].raceEvList[i].aDescTxt);
                    listParent = document.createElement('dl');
                    for (j = 0; j < data.tabs[s][z].raceEvList[i].descList.length; j++) {
                        listChildTitle = document.createElement('dt');
                        listChildTitleText = document.createTextNode(data.tabs[s][z].raceEvList[i].descList[j].listChildTitleTxt);
                        listChildTitle.appendChild(listChildTitleText);
                        listParent.appendChild(listChildTitle);

                        listChildDesc = document.createElement('dd');
                        listChildDescText = document.createTextNode(data.tabs[s][z].raceEvList[i].descList[j].listChildDescTxt);
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

                    divBtn.appendChild(aBtnText);

                    articleRE.appendChild(divNumbColm);
                    articleRE.appendChild(divImgNumb);
                    articleRE.appendChild(divDescription);
                    articleRE.appendChild(divBtn);
                    sectionRE.appendChild(articleRE);
                }
                divBgModel.appendChild(sectionRE);
            }

            document.getElementById('wrapper2').appendChild(divBgModelParent);
        }
    }
};
