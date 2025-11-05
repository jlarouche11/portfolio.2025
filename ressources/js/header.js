/*Ouverture/fermeture du menu*/
var scroll = true;

$('.nav-btn').on('click', function (e) {
	$('.main-header').toggleClass('open-navigation');
	$('.nav-btn').toggleClass('open');

	if (scroll) {
		noScroll();
		scroll = false;
	} else {
		unlockScroll();
		scroll = true;
	}
});

window.noScroll = function () {
	var $html = $('html');
	var $body = $('body');
	var initWidth = $body.outerWidth();
	var initHeight = $body.outerHeight();

	var scrollPosition = [self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop];

	$html.data('scroll-position', scrollPosition);
	$html.data('previous-overflow', $html.css('overflow'));
	$html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);

	var marginR = $body.outerWidth() - initWidth;
	var marginB = $body.outerHeight() - initHeight;
	$body.css({ 'margin-right': marginR, 'margin-bottom': marginB });
};

window.unlockScroll = function () {
	var $html = $('html');
	var $body = $('body');
	$html.css('overflow', $html.data('previous-overflow'));
	var scrollPosition = $html.data('scroll-position');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);

	$body.css({ 'margin-right': 0, 'margin-bottom': 0 });
};
