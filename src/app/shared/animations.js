var toggleBtnMenuIcon, access, i, openTab, tabcontent, classTabContent, classLinkTab, tablinks, closeWrapper2, closeLoginModel, openLoginModal, validateForm, error, onblurLoginInput, closeValidatedModel, searchList, counter, backBtn, openPanel, changeView, panel, textBtn, counterVx = 0;
toggleBtnMenuIcon = function(toggling) {
    toggling.classList.toggle("change");
    document.getElementById("subHeader").classList.toggle("show");
};

toogleBtnDropDown = function(toggling) {
    toggling.lastChild.classList.toggle("activecord");
    toggling.nextElementSibling.classList.toggle("show");
};

openTab = function(evt, tabsName) {
    classTabContent = evt.currentTarget.attributes.class.nodeValue.slice(9, 10);
    tabcontent = document.getElementsByClassName("tabcontent-" + classTabContent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    classLinkTab = evt.currentTarget.attributes.class.nodeValue.slice(0, 15);
    tablinks = document.getElementsByClassName(classLinkTab);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("activetab", "");
    }
    document.getElementById(tabsName).style.display = "block";
    if (evt.currentTarget.className.indexOf("activetab") != -1) {
        evt.currentTarget.className += "";
    } else {
        evt.currentTarget.className += " activetab";
    }

};

openPanel = function(evt, tabsName) {
    panel = document.getElementsByClassName("panel");
    btnMed = document.getElementsByClassName("btnMed");
    for (i = 0; i < btnMed.length; i++) {
        btnMed[i].className = btnMed[i].className.replace("btnMed activeBtn", "btnMed");
    }
    for (i = 0; i < panel.length; i++) {
        panel[i].style.display = "none";
    }
    textBtn = evt.currentTarget.childNodes[0];
    if (tabsName === 'panel-0' && textBtn.data === 'All Races') {
        for (i = 0; i < panel.length; i++) {
            panel[i].style.display = "block";
        }
    }
    document.getElementById(tabsName).style.display = "block";
    document.getElementById('wrapper2').style.display = 'block';
    evt.currentTarget.className += " activeBtn";
    window.scrollTo(0, 0);
};

changeView = function(viewName) {
    viewContainer = document.getElementsByClassName("view-container");
    for (i = 0; i < viewContainer.length; i++) {
        viewContainer[i].style.display = "none";
    }
    document.getElementById(viewName).style.display = "block";
};

closeWrapper2 = function() {
    document.getElementById('wrapper2').style.display = 'none';
};

openLoginModal = function() {
    document.getElementById('loginModal').style.display = 'block';
};

closeLoginModel = function() {
    document.getElementById('loginModal').style.display = 'none';
};

validateForm = function() {
    var userName = document.forms["loginForm"]["uname"].value;
    var password = document.forms["loginForm"]["psw"].value;
    error = document.getElementsByClassName("error");
    for (i = 0; i < error.length; i++) {
        error[i].style.display = "none";
    }
    if (userName == null || userName == "") {
        error[0].style.display = "block";
    } else if (password == null || password == "") {
        error[1].style.display = "block";
    } else {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('validatedPopUp').style.display = 'block';
    }
};

closeValidatedModel = function() {
    document.getElementById('validatedPopUp').style.display = 'none';
    document.forms["loginForm"]["psw"].value = '';
}

onblurLoginInput = function() {
    error = document.getElementsByClassName("error");
    for (i = 0; i < error.length; i++) {
        error[i].style.display = "none";
    }
}

searchList = function() {
    var input, filter, containerWrapper, article, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    containerWrapper = document.getElementById("container-wrappers-1");
    article = containerWrapper.getElementsByTagName("article");
    for (i = 0; i < article.length; i++) {
        a = article[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            article[i].style.display = "";
        } else {
            article[i].style.display = "none";
        }
    }
};

counter = function(evt) {
    var counterEl = document.getElementById("counter"),
        btnSelected = document.getElementById(evt.id);
    if (evt.classList.value === "btn btn--default btn--sm activeBtn") {
        btnSelected.className = "btn btn--default btn--sm";
        counterVx--;
    } else {
        btnSelected.className = "btn btn--default btn--sm activeBtn";
        counterVx++;
    }
    counterEl.innerHTML = counterVx;
    counterEl.style.display = (counterEl.innerHTML === "0") ? 'none' : 'block';
};
var isBelowPageFold = function() {
    return (window.scrollY || window.pageYOffset) > window.screen.height / 24;
};

window.onscroll = function() {
    var getClassElement = document.getElementById('btnTopId').className;
    if (isBelowPageFold() || getClassElement == 'btnTopClass fadeIn') {
        if (isBelowPageFold()) {
            document.getElementById('btnTopId').className = 'btnTopClass fadeIn';
        } else {
            document.getElementById('btnTopId').className = 'btnTopClass fadeOut';
        }
    }
};

function currentYPosition() {
    if (self.pageYOffset) return self.pageYOffset;
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
    return false;
}

var sortTable = function(n) {
    var table, rows, switching, i, antiElem, postElem, shouldSwitch, dir, numx, numy, switchcount = 0;
    table = n.parentNode.parentNode.parentNode;
    switching = true;
    antiElem = n.childNodes[1];
    antiElem.classList.toggle('arrow-down');
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            antiElem = rows[i].getElementsByTagName("TD")[n.cellIndex];
            postElem = rows[i + 1].getElementsByTagName("TD")[n.cellIndex];
            if (dir == "asc") {
                if (!isNaN(antiElem.innerHTML)) {
                    if (parseFloat(antiElem.innerHTML) > parseFloat(postElem.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (antiElem.innerHTML.toLowerCase() > postElem.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir == "desc") {
                if (!isNaN(antiElem.innerHTML)) {
                    if (parseFloat(antiElem.innerHTML) < parseFloat(postElem.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (antiElem.innerHTML.toLowerCase() < postElem.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};
