var searchLists = function() {
    var searchListsHttps = new XMLHttpRequest();
    var urlsearch = "../../../data/searchLists.json";

    searchListsHttps.onreadystatechange = function() {
        if (searchListsHttps.readyState == 4 && searchListsHttps.status == 200) {
            var info = JSON.parse(searchListsHttps.responseText);
            searchLists(info);
        }
    };

    searchListsHttps.open("GET", urlsearch, true);
    searchListsHttps.send();

    var z, s, i, j;

    function searchLists(data) {
        var inputEl, articleRE, divNumbColm, spanNumColm, pNumbColm, divImgNumb, imgNumb, spanNumb, divDescription, titleDesc, aDesc, listParent, listChildTitle, listChildDesc, divBtn, aBtn, aBtnText;
        divInput = document.createElement('div');
        divInput.setAttribute('class', 'input-group clearfix');
        spanInput = document.createElement('span');
        spanInput.setAttribute('class', 'input-group-addon');
        iconInput = document.createElement('i');
        iconInput.setAttribute('class', 'icon-search');
        inputEl = document.createElement('input');
        inputEl.setAttribute('type', 'text');
        inputEl.setAttribute('id', 'searchInput');
        inputEl.setAttribute('onkeyup', 'searchList()');
        inputEl.setAttribute('placeholder', 'Search for names..');
        inputEl.setAttribute('title', 'Type in a name');
        spanInput.appendChild(iconInput);
        divInput.appendChild(spanInput);
        divInput.appendChild(inputEl);

        for (z = 0; z < data.tabs.length; z++) {
            for (i = 0; i < data.tabs[z].raceEvList.length; ++i) {
                articleRE = document.createElement('article');
                articleRE.setAttribute('class', data.tabs[z].raceEvList[i].articleREClass);
                divNumbColm = document.createElement('div');
                divNumbColm.setAttribute('class', data.tabs[z].raceEvList[i].divNumbColmClass);
                spanNumColm = document.createElement('span');
                spanNumColmText = document.createTextNode(data.tabs[z].raceEvList[i].spanNumColmTxt);
                pNumbColm = document.createElement('p');
                pNumbColm.setAttribute('class', data.tabs[z].raceEvList[i].pNumbColmClass);
                pNumbColmText = document.createTextNode(data.tabs[z].raceEvList[i].pNumbColmTxt);

                divImgNumb = document.createElement('div');
                divImgNumb.setAttribute('class', data.tabs[z].raceEvList[i].divImgNumbClass);
                imgNumb = document.createElement('img');
                imgNumb.setAttribute('src', data.tabs[z].raceEvList[i].imgNumbSrc);
                spanNumb = document.createElement('span');
                spanNumbText = document.createTextNode(data.tabs[z].raceEvList[i].spanNumbTxt);

                divBtn = document.createElement('div');
                divBtn.setAttribute('class', data.tabs[z].raceEvList[i].divBtnClass);
                aBtn = document.createElement('a');
                aBtn.setAttribute('href', data.tabs[z].raceEvList[i].aBtnLink);
                aBtnText = document.createTextNode(data.tabs[z].raceEvList[i].aBtnTxt);

                divDescription = document.createElement('div');
                divDescription.setAttribute('class', data.tabs[z].raceEvList[i].divDescriptionClass);
                titleDesc = document.createElement('h3');
                aDesc = document.createElement('a');
                aDesc.setAttribute('href', data.tabs[z].raceEvList[i].aDescLink);
                aDescText = document.createTextNode(data.tabs[z].raceEvList[i].aDescTxt);
                listParent = document.createElement('dl');
                for (j = 0; j < data.tabs[z].raceEvList[i].descList.length; j++) {
                    listChildTitle = document.createElement('dt');
                    listChildTitleText = document.createTextNode(data.tabs[z].raceEvList[i].descList[j].listChildTitleTxt);
                    listChildTitle.appendChild(listChildTitleText);
                    listParent.appendChild(listChildTitle);

                    listChildDesc = document.createElement('dd');
                    listChildDescText = document.createTextNode(data.tabs[z].raceEvList[i].descList[j].listChildDescTxt);
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

                document.getElementById('container-wrappers-1').appendChild(articleRE);
            }

        }
        document.getElementById('container-wrappers-1').className = 'view-container bg-white-100';
        var insertSearch = document.getElementById('container-wrappers-1');
        insertSearch.insertBefore(divInput, insertSearch.childNodes[0]);
    }
};
