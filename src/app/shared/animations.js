var toggleBtnMenuIcon, access, i, tabcontentThree, tabcontentTwo, tablinksThree, tablinksTwo;
toggleBtnMenuIcon = function(toggling) {
    toggling.classList.toggle("change");
    document.getElementById("subHeader").classList.toggle("show");
};

toogleBtnDropDown = function(toggling) {
    toggling.lastChild.classList.toggle("activecord");
    toggling.nextElementSibling.classList.toggle("show");
};

function openTabThree(evt, tabsName) {
    tabcontentThree = document.getElementsByClassName("tabcontentThree");
    for (i = 0; i < tabcontentThree.length; i++) {
        tabcontentThree[i].style.display = "none";
    }
    tablinksThree = document.getElementsByClassName("tablinksThree");
    for (i = 0; i < tablinksThree.length; i++) {
        tablinksThree[i].className = tablinksThree[i].className.replace("activetab", "");
    }
    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += " activetab";
}

function openTabTwo(evt, tabsName) {
    tabcontentTwo = document.getElementsByClassName("tabcontentTwo");
    for (i = 0; i < tabcontentTwo.length; i++) {
        tabcontentTwo[i].style.display = "none";
    }
    tablinksTwo = document.getElementsByClassName("tablinksTwo");
    for (i = 0; i < tablinksTwo.length; i++) {
        tablinksTwo[i].className = tablinksTwo[i].className.replace("activetab", "");
    }
    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += " activetab";
}
