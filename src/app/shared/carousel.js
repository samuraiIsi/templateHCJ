var carousel = function(){
	var carouselHttp = new XMLHttpRequest();
    var urlCarouselCss = "../../../data/carousel.json";

    carouselHttp.onreadystatechange = function() {
        if (carouselHttp.readyState == 4 && carouselHttp.status == 200) {
        	var info = JSON.parse(carouselHttp.responseText);
            carouselComponent(info);
            showSlides();
        }
    };
    carouselHttp.open("GET", urlCarouselCss, true);
    carouselHttp.send();
    var i;
	var carouselComponent = function(data){
    	var divContainer, divcontentSlider, divSlider, divSliderWrapper, ulSlider, divBar, liSlider, imgSlider, divTip, h1Tip, pTip, pTipText, btn, btnText, anchor, dot, arrowSlider, paginationWrapper, spanDot, plusSlidesArray= [-2, 0];
    	var screenWidth = window.screen.width;
		for(i = 0; i < data.carousel.length; i++) {
			divContainer = document.createElement('div');
			divSliderWrapper = document.createElement('div');
			divPaginationWrapper = document.createElement('div');
			divContainer.setAttribute('class', 'containerSlider');
			divcontentSlider = document.createElement('div');
			divcontentSlider.setAttribute('class', 'contentSlider');
			divSlider = document.createElement('div');
			divSlider.setAttribute('class', data.carouselType[i]);
			divSliderWrapper.setAttribute('class', 'slider-imgWrapper');
			divSliderWrapper.addEventListener('mouseenter', stopSlider);
			divSliderWrapper.addEventListener('mouseleave', reStartSlider);
			divPaginationWrapper.setAttribute('class', 'paginationWrapper')
			ulSlider = document.createElement('ul');
			if(data.carouselType[i] == "slider-img carouselCss img-responsive") ulSlider.setAttribute('id', 'ulWrapper');
			divBar = document.createElement('div');
			divBar.setAttribute('class', 'progress-bar');
			for(var h = 0; h < data.arrows[i].length; h++) {
				if(data.arrows[i][h] != null){
					arrowSlider = document.createElement('a');
					arrowSlider.setAttribute('class', data.arrows[i][h]);
					arrowSlider.addEventListener('click', plusSlides(plusSlidesArray[h]), false);
					divSliderWrapper.appendChild(arrowSlider);
				}
			}
			for(var j = 0; j < data.carousel[i].length; j++) {
				liSlider = document.createElement('li');
				spanDot = document.createElement('span');
				data.carousel[i][j].liSliderId != null ? liSlider.setAttribute('id', data.carousel[i][j].liSliderId) : liSlider.removeAttribute('id');
				liSlider.setAttribute('class', data.carousel[i][j].liSliderClass);
				spanDot.setAttribute('class', 'dot');
				spanDot.addEventListener('click', currentSlide(j + 1), false);
				anchor = document.createElement('a');
				anchor.setAttribute('href', '#');
				anchor.addEventListener('click', eval(data.carousel[i][j].anchorLink));
				anchor.setAttribute('class', data.carousel[i][j].anchorClass);
				imgSlider = document.createElement('img');
				screenWidth > 567 ? imgSlider.setAttribute('src', data.carousel[i][j].imgSrcDouble) : imgSlider.setAttribute('src', data.carousel[i][j].imgSrcBasic)
				imgSlider.setAttribute('alt', data.carousel[i][j].imgAlt);
				imgSlider.setAttribute('width', data.carousel[i][j].imgWidth);
				imgSlider.setAttribute('height', data.carousel[i][j].imgHeight);
				imgSlider.setAttribute('class', 'img-responsive');
				divTip = document.createElement('div');
				divTip.setAttribute('class', data.carousel[i][j].divTipClass);
				h1Tip =document.createElement('h1');
				h1TipText = document.createTextNode(data.carousel[i][j].h1Text);
				divPaginationWrapper.appendChild(spanDot);
				if(data.carousel[i][j].liSliderId != null) {
					anchor.appendChild(imgSlider);
					h1Tip.appendChild(h1TipText);
					liSlider.appendChild(anchor);
					divTip.appendChild(h1Tip);
					liSlider.appendChild(divTip);
				} else {
					pTip = document.createElement('p');
					btn = document.createElement('button');
					btn.setAttribute('class', data.carousel[i][j].btnClass);
					btn.addEventListener('click', eval(data.carousel[i][j].anchorLink));
					btnText = document.createTextNode(data.carousel[i][j].btnText);
					pTipText = document.createTextNode(data.carousel[i][j].pText);
					pTip.appendChild(pTipText);
					h1Tip.appendChild(h1TipText);
					btn.appendChild(btnText);
					divTip.appendChild(h1Tip);
					divTip.appendChild(pTip);
					divTip.appendChild(btn);
					liSlider.appendChild(imgSlider);
					liSlider.appendChild(divTip);
				}
				ulSlider.appendChild(liSlider);
			}
			if(data.dotsActive[i] == true) divSliderWrapper.appendChild(divPaginationWrapper);
			divSliderWrapper.appendChild(ulSlider);
			divSlider.appendChild(divSliderWrapper);
			data.barProgress[i] == true ? divSlider.appendChild(divBar): false;
			divcontentSlider.appendChild(divSlider);
			divContainer.appendChild(divcontentSlider);

			document.getElementById(data.wrapperId[i]).appendChild(divContainer);
		}
	};
};