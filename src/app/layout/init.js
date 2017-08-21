function init() {
	headerFunction();
	subHeaderFunction();
	logoHeader();
	bodyFunction();
	buttons();
	containerWps();
	document.addEventListener('DOMContentLoaded', bannersComponent, false);
	document.addEventListener('DOMContentLoaded', eventsLists, false);
	document.addEventListener('DOMContentLoaded', raceEvents, false);
	searchLists();
	forms();
	scrollText();
	tables();
	carousel();
	panelsBox();
	setIe10();
	footer();
}