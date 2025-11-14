$('.gallery-block').each(function () {
	$(this).find('a.flGallery').featherlightGallery({
		previousIcon: '<i class="icon-arrow-left"></i>',
		nextIcon: '<i class="icon-arrow-right"></i>'
	});
});
