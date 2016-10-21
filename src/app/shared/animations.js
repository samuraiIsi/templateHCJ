var toggleBtnMenuIcon, access, i, openTab, tabcontent, classTabContent, classLinkTab, tablinks, closeWrapper2, openPanel, panel;
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

closeWrapper2 = function() {
    document.getElementById('wrapper2').style.display = 'none';
};

openPanel = function(evt, tabsName) {
    panel = document.getElementsByClassName("panel");
    for (i = 0; i < panel.length; i++) {
        panel[i].style.display = "none";
    }
    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += " activetab";
};