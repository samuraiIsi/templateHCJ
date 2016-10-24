var toggleBtnMenuIcon, access, i, openTab, tabcontent, classTabContent, classLinkTab, tablinks, closeWrapper2, closeLoginModel, openLoginModal, validateForm, error, onblurLoginInput, closeValidatedModel, openPanel, panel, textBtn;
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
    evt.currentTarget.className += " activetab";
};

openPanel = function(evt, tabsName) {
    panel = document.getElementsByClassName("panel");
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
    window.scrollTo(0, 0);
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
}
 
onblurLoginInput = function() {
    error = document.getElementsByClassName("error");
    for (i = 0; i < error.length; i++) {
        error[i].style.display = "none";
    }
}