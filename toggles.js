function Toggles () {

	// The area to toggle up and down
	this.toggleArea = 'data-toggle';

}

/**
 * Toggles a div area up and down
 * @param {object} element
 */
Toggles.prototype.normToggle = function (element) {

    var area = element.attr(this.toggleArea);

    $('#js-' + area).toggle();
}

/**
 * Slidetoggles a div area up and down
 * @param {object} element
 */
Toggles.prototype.slideToggle = function (element) {

    var area = element.attr(this.toggleArea);

    $('#js-' + area).slideToggle();
}

Tog = new Toggles();

/* Click Event */
$('.js-toggle').on('click', function(e) {
    var element = $(e.target);

    Tog.normToggle(element);

    e.preventDefault();

});
