var formLogin, formContainer;
formLogin = function() {
	formContainer = document.createElement('form');
	formContainer.setAttribute('class', 'modal-content animate');
	divHeader = document.createElement('div');
	divHeader.setAttribute('class', 'imgcontainer');
	spanHeader = document.createElement('span');
	spanHeader.setAttribute('class', 'close');
	spanHeader.setAttribute('title', 'Close');
	spanHeader.setAttribute('onclick', 'hacerLaFuncion');
	imgHeader = document.createElement('img');
	imgHeader.setAttribute('src', 'miAvatar');
	imgHeaderAlt.setAttribute('alt', 'Avatar');
	imgHeaderAlt.setAttribute('class', 'avatar');
}
