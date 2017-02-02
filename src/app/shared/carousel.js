var carousel = function(){
	var carouselHttp = new XMLHttpRequest();
    var urlCarouselCss = "../../../data/carousel.json";

    carouselHttp.onreadystatechange = function() {
        if (carouselHttp.readyState == 4 && carouselHttp.status == 200) {
        	var info = JSON.parse(carouselHttp.responseText);
            carouselCss(info);
        }
    };
    carouselHttp.open("GET", urlCarouselCss, true);
    carouselHttp.send();
    var i;
	var carouselCss = function(data){
    	var divContainer, divcontentSlider, divSlider, divSliderWrapper, ulSlider, divBar, liSlider, imgSlider, divTip, h1Tip, anchorTip;
		for(i = 0; i < data.carousel.length; i++) {
			divContainer = document.createElement('div');
			divContainer.setAttribute('class', 'containerSlider');
			divcontentSlider = document.createElement('div');
			divcontentSlider.setAttribute('id', 'contentSlider');
			divSlider = document.createElement('div');
			divSlider.setAttribute('id', 'slider');
			divSliderWrapper = document.createElement('div');
			divSliderWrapper.setAttribute('id', 'sliderWrapper');
			ulSlider = document.createElement('ul');
			divBar = document.createElement('div');
			divBar.setAttribute('class', 'progress-bar');
			for(var j = 0; j < data.carousel[i].length; j++) {
				liSlider = document.createElement('li');
				liSlider.setAttribute('id', data.carousel[i][j].liSliderId);
				liSlider.setAttribute('class', data.carousel[i][j].liSliderClass);
				imgSlider = document.createElement('img');
				imgSlider.setAttribute('src', data.carousel[i][j].imgSrc);
				imgSlider.setAttribute('alt', data.carousel[i][j].imgAlt);
				imgSlider.setAttribute('width', data.carousel[i][j].imgWidth);
				imgSlider.setAttribute('height', data.carousel[i][j].imgHeight);
				divTip = document.createElement('div');
				divTip.setAttribute('class', 'tipBox');
				h1Tip =document.createElement('h1');
				h1TipText = document.createTextNode(data.carousel[i][j].h1Text);
				anchorTip = document.createElement('a');
				anchorTipText = document.createTextNode(data.carousel[i][j].anchorText);
				anchorTip.setAttribute('href', data.carousel[i][j].anchorLink);
				anchorTip.setAttribute('class', data.carousel[i][j].anchorClass);
				h1Tip.appendChild(h1TipText);
				divTip.appendChild(h1Tip);
				anchorTip.appendChild(anchorTipText);
				divTip.appendChild(anchorTip);
				liSlider.appendChild(imgSlider);
				liSlider.appendChild(divTip);
				ulSlider.appendChild(liSlider);
			}
			divSliderWrapper.appendChild(ulSlider);
			divSlider.appendChild(divSliderWrapper);
			divSlider.appendChild(divBar);
			divcontentSlider.appendChild(divSlider);
			divContainer.appendChild(divcontentSlider);
		}
		for(var z = 0; z < data.wrapperId.length; z++){
			document.getElementById(data.wrapperId[z].carouselFive).appendChild(divContainer);
		}

	};
};