export default function ZoneAbout({
	imageCol = 'col-xl-5',
	imageLink,
	imageAlt,
	contentCol = 'col-xl-7',
	contentText,
	btnLink,
	btnLabel,
	btnIcon = 'icon-arrow-right',
	btnColor = 'btn-yellow',
	btnIsExternal = false
}) {
	var button = '';
	var image = '';

	if (btnLink) {
		button = `
			<div class="btns-group">
				<a href="${btnLink}" class="btn ${btnColor}" ${btnIsExternal ? `target="_blank"` : ``}>${btnLabel} <div class="block-icon"><i class="${btnIcon}"></i></div></a>
			</div>
		`;
	}

	if (imageLink) {
		image = `
		<div class="col-12 ${imageCol} block-col">
			<div class="d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
				<div class="about-image position-relative">
					<img src="${imageLink}" alt="${imageAlt}" class="img-bg fit-cover position-center">
				</div>
			</div>
		</div>
		`;
	}

	return `
	${image}
	<div class="col-12 ${contentCol} block-col">
		${contentText}
		${button}
	</div>
	`;
}
