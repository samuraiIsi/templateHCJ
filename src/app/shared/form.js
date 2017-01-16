var forms = function() {
    var divModal, formContainer, divHeader, spanHeader, spanHeaderText, imgHeader, divContainer, i, labelTitle, labelTitleText, inputBox, btnLogin, inputCheck, inputCheckText, divFooter, btnCancel, btnCancelText, spanForgot, spanForgotText, aBtn, aBtnText, formLogin, formsHttps, urlforms, info;
    formsHttps = new XMLHttpRequest();
    urlforms = "../../../data/form.json";

    formsHttps.onreadystatechange = function() {
        if (formsHttps.readyState == 4 && formsHttps.status == 200) {
            info = JSON.parse(formsHttps.responseText);
            formLogin(info);
        }
    };

    formsHttps.open("GET", urlforms, true);
    formsHttps.send();

    formLogin = function(data) {
        divModal = document.createElement('div');
        divModal.setAttribute('id', data.divModalId);
        divModal.setAttribute('class', data.divModalClass);
        formContainer = document.createElement('form');
        formContainer.setAttribute('class', data.formContainerClass);
        formContainer.setAttribute('name', data.formName);
        formContainer.setAttribute('action', 'action_page.php');
        divHeader = document.createElement('div');
        divHeader.setAttribute('class', data.divHeaderClass);
        spanHeader = document.createElement('span');
        spanHeader.setAttribute('class', data.spanHeaderClass);
        spanHeader.setAttribute('title', data.spanHeaderTitle);
        spanHeader.setAttribute('onclick', data.spanHeaderMethod);
        spanHeaderText = document.createTextNode('X');
        imgHeader = document.createElement('img');
        imgHeader.setAttribute('src', data.imgHeaderSrc);
        imgHeader.setAttribute('alt', data.imgHeaderAlt);
        imgHeader.setAttribute('class', data.imgHeaderAltClass);

        divContainer = document.createElement('div');
        divContainer.setAttribute('class', data.divContainerClass);

        for (i = 0; i < data.inputBoxes.length; i++) {
            labelTitle = document.createElement('label');
            labelTitleText = document.createTextNode(data.inputBoxes[i].labelText);
            inputBox = document.createElement('input');
            inputBox.setAttribute('type', data.inputBoxes[i].inputType);
            inputBox.setAttribute('placeholder', data.inputBoxes[i].inputPlaceHolder);
            inputBox.setAttribute('name', data.inputBoxes[i].inputName);
            inputBox.setAttribute('onfocus', 'onblurLoginInput()');
            pError = document.createElement('p');
            pError.setAttribute('class', 'error');
            pErrorText = document.createTextNode(data.inputBoxes[i].errorText);

            pError.appendChild(pErrorText);
            labelTitle.appendChild(labelTitleText);
            divContainer.appendChild(labelTitle);
            divContainer.appendChild(inputBox);
            divContainer.appendChild(pError);
        }
        btnLogin = document.createElement('button');
        btnLogin.setAttribute('type', data.btnLoginType);
        btnLogin.setAttribute('onclick', data.btnLoginMethod);
        btnLogin.setAttribute('class', data.btnLoginClass);
        btnLoginText = document.createTextNode('Login');
        inputCheck = document.createElement('input');
        inputCheck.setAttribute('type', 'checkbox');
        inputCheck.setAttribute('checked', 'checked');
        spanCheck = document.createElement('span');
        spanCheck.setAttribute('class', 'fs15')
        inputCheckText = document.createTextNode(data.inputCheckText);

        divFooter = document.createElement('div');
        divFooter.setAttribute('class', data.divFooterClass);
        btnCancel = document.createElement('button');
        btnCancel.setAttribute('type', data.btnCancelType);
        btnCancel.setAttribute('class', data.btnCancelClass);
        btnCancel.setAttribute('onclick', data.btnCancelMethod);
        btnCancelText = document.createTextNode('Cancel');
        spanForgot = document.createElement('span');
        spanForgot.setAttribute('class', data.spanForgotClass);
        spanForgotText = document.createTextNode(data.spanForgotText);
        aBtn = document.createElement('a');
        aBtn.setAttribute('href', '#');
        aBtnText = document.createTextNode(data.aBtnText);

        spanHeader.appendChild(spanHeaderText);
        divHeader.appendChild(spanHeader);
        divHeader.appendChild(imgHeader);
        formContainer.appendChild(divHeader);

        btnLogin.appendChild(btnLoginText);
        spanCheck.appendChild(inputCheckText);
        
        divContainer.appendChild(btnLogin);
        divContainer.appendChild(inputCheck);
        divContainer.appendChild(spanCheck);
        formContainer.appendChild(divContainer)

        btnCancel.appendChild(btnCancelText);
        spanForgot.appendChild(spanForgotText);
        aBtn.appendChild(aBtnText);
        spanForgot.appendChild(aBtn);
        divFooter.appendChild(btnCancel);
        divFooter.appendChild(spanForgot);
        formContainer.appendChild(divFooter);

        divModal.appendChild(formContainer);

        document.getElementById('bodyContainer').appendChild(divModal);
    };
};
