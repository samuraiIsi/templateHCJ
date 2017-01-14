var buttons = function() {
    var xmlhttps = new XMLHttpRequest();
    var url1 = "../../../data/buttons.json";

    xmlhttps.onreadystatechange = function() {
        if (xmlhttps.readyState == 4 && xmlhttps.status == 200) {
            var myArr = JSON.parse(xmlhttps.responseText);
            btnBackArrow(myArr);
            btnHorse(myArr);
            btnVertical(myArr);
            listBtnCircles(myArr)
        }
    };

    xmlhttps.open("GET", url1, true);
    xmlhttps.send();

    var i;

    function btnBetting() {
        var spanBet, btnBet, icon;
        btnBet = document.createElement("button");
        btnBet.setAttribute("href", "#");
        btnBet.setAttribute('class', 'btn btn--login pull-left');
        spanBet = document.createElement('span');
        spanBetText = document.createTextNode('Color');
        spanBet.appendChild(spanBetText);
        icon = document.createElement("i");
        icon.setAttribute('class', 'fs0 icon-select');
        spanBet.appendChild(icon)
        btnBet.appendChild(spanBet);
        document.getElementById('btnBetting').appendChild(btnBet);
    }

    function btnsLoginArea() {
        var btnLogin, iconLinkLogin;
        btnLogin = document.createElement('button');
        btnLogin.setAttribute('class', 'btn btn--login hidden-sm');
        btnLogin.setAttribute('href', 'javascript:void(0)');
        btnLogin.setAttribute('onclick', 'openLoginModal()');
        //btnLoginText = document.createTextNode('Login');
        spanLogin = document.createElement('span');
        spanLoginText = document.createTextNode('Login');
        spanLogin.appendChild(spanLoginText);
        iconLinkLogin = document.createElement('i');
        iconLinkLogin.setAttribute('class', 'fs0 icon-expanded');
        spanLogin.appendChild(iconLinkLogin);
        btnLogin.appendChild(spanLogin);
        document.getElementById('loginArea').appendChild(btnLogin);

        var btnLoginHead, linkLoginHead, linkLoginHeadText;
        btnLoginHead = document.createElement('button');
        btnLoginHead.setAttribute('class', 'btn--circle btn--circle--sm btn--login--sm hidden-md');
        btnLoginHead.setAttribute('onclick', 'openLoginModal()');
        //linkLoginHead = document.createElement('A');
        btnLoginHead.setAttribute('href', 'javascript:void(0)');
        iconLoginHead = document.createElement('i');
        iconLoginHead.setAttribute('class', 'fs11 icon-login-head');
        //btnLoginHead.appendChild(linkLoginHead);
        btnLoginHead.appendChild(iconLoginHead);
        document.getElementById('loginArea').appendChild(btnLoginHead);

        var btnJoin;
        btnJoin = document.createElement('button');
        btnJoin.setAttribute('class', 'btn btn--join');
        //linkJoin = document.createElement('A');
        btnJoin.setAttribute('href', '#');
        btnJoinText = document.createTextNode('Join');
        btnJoin.appendChild(btnJoinText);
        document.getElementById('loginArea').appendChild(btnJoin);
    }
    
    var btnBackArrow = function(data) {
        var divBtBk, linkBtBk, iconBtBk;
        divBtBk = document.createElement('div');
        divBtBk.setAttribute('class', data.btnBkAr.divClass);
        linkBtBk = document.createElement('button');
        linkBtBk.setAttribute('class', data.btnBkAr.btnClass);
        linkBtBk.setAttribute('href', data.btnBkAr.linkAtt);
        linkBtBk.setAttribute('onclick', 'backBtn()');
        iconBtBk = document.createElement('i');
        iconBtBk.setAttribute('class', data.btnBkAr.iconClass);
        linkBtBk.appendChild(iconBtBk);
        divBtBk.appendChild(linkBtBk);
        document.getElementById('subHeaderChildFirst').appendChild(divBtBk);
    };

    function btnHorse(data) { // Rename to btnHorizontal
        var divBtnH, iconBtnH, spanBtnH, spanBtnHText;
        btnHEl = document.createElement('button');
        btnHEl.setAttribute('class', data.btnHorse.btnClass);
        btnHEl.setAttribute('href', data.btnHorse.btnLink);
        btnHEl.setAttribute('onclick', 'changeView' + '(' + "'" + data.btnHorse.btnMethodValue + "'" + ')');

        iconBtnH = document.createElement('i');
        iconBtnH.setAttribute('class', data.btnHorse.iconClass);
        spanBtnH = document.createElement('span');
        spanBtnH.setAttribute('class', data.btnHorse.spanClass);
        spanBtnHText = document.createTextNode(data.btnHorse.spanText);
        spanBtnH.appendChild(spanBtnHText);
        btnHEl.appendChild(iconBtnH);
        btnHEl.appendChild(spanBtnH);
        document.getElementById('subHeaderChildFirst').appendChild(btnHEl);
    }

    function btnVertical(data) {
        var btnVert, iconBtnVert, pBtnVert, pBtnVertText;
        btnVertParent = document.createElement('div');
        btnVertParent.setAttribute('id', data.btnVerticalDivParent.divId);
        btnVertParent.setAttribute('class', data.btnVerticalDivParent.divClass);
        for (i = 0; i < data.btnVerticalinf.length; i++) {
            btnVert = document.createElement('button');
            btnVert.setAttribute('class', data.btnVerticalinf[i].btnClass);
            btnVert.setAttribute('href', data.btnVerticalinf[i].linkAtt);
            btnVert.setAttribute('onclick', 'changeView' + '(' + "'" + data.btnVerticalinf[i].btnMethodValue + "'" + ')');
            spanVert = document.createElement('span');
            spanVert.setAttribute('id', data.btnVerticalinf[i].badgeCounter);
            spanVert.setAttribute('class', data.btnVerticalinf[i].badgeClass);
            iconBtnVert = document.createElement('i');
            iconBtnVert.setAttribute('class', data.btnVerticalinf[i].iconClass);
            pBtnVert = document.createElement('p');
            pBtnVert.setAttribute('class', data.btnVerticalinf[i].pClass);
            pBtnVertText = document.createTextNode(data.btnVerticalinf[i].pText);
            pBtnVert.appendChild(pBtnVertText);
            btnVert.appendChild(spanVert);
            btnVert.appendChild(iconBtnVert);
            btnVert.appendChild(pBtnVert);
            //btnVert.appendChild(linkBtBk);
            btnVertParent.appendChild(btnVert);
        }
        document.getElementById('subHeaderChild').appendChild(btnVertParent);
    }

    function listBtnCircles(info) {
        var ulBC, liBC, aBC, divBC, iconBC, pBC;
        ulBC = document.createElement('ul');
        ulBC.setAttribute('class', info.listBtnCirclesUlData.ulClass);
        for (i = 0; i < info.listBtnCirclesLiData.length; i++) {
            liBC = document.createElement('li');
            liBC.setAttribute('class', info.listBtnCirclesLiData[i].liClass);
            aBC = document.createElement('a');
            aBC.setAttribute('href', info.listBtnCirclesLiData[i].aLink);
            aBC.setAttribute('onclick', 'changeView' + '(' + "'" + info.listBtnCirclesLiData[i].aMethod + "'" + ')');
            divBC = document.createElement('div');
            divBC.setAttribute('class', info.listBtnCirclesLiData[i].divClass)
            iconBC = document.createElement('i');
            iconBC.setAttribute('class', info.listBtnCirclesLiData[i].iconClass);
            pBC = document.createElement('p');
            pBC.setAttribute('class', info.listBtnCirclesLiData[i].pClass);
            pBCText = document.createTextNode(info.listBtnCirclesLiData[i].pText);
            pBC.appendChild(pBCText);
            divBC.appendChild(iconBC);
            divBC.appendChild(pBC);
            aBC.appendChild(divBC);
            liBC.appendChild(aBC);
            ulBC.appendChild(liBC);
        }
        document.getElementById('listBtnsGroupCircles').appendChild(ulBC);
    }

    function btnToTopFunction() {
        var divBtnToTop, iIconTopBtn;
        divBtnToTop = document.createElement('button');
        divBtnToTop.setAttribute('class', 'btnTopClass');
        divBtnToTop.setAttribute('id', 'btnTopId');
        divBtnToTop.setAttribute('onclick', 'smoothScroll('+ '"backTopCall"'+ ')');
        iIconTopBtn = document.createElement('i');
        iIconTopBtn.setAttribute('class', 'icon arrow-left');
        divBtnToTop.appendChild(iIconTopBtn);

        document.getElementById('bodyContainer').appendChild(divBtnToTop);
    }
    btnBetting();
    btnsLoginArea();
    btnToTopFunction();
}
