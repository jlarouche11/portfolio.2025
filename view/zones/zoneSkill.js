export default function ZoneSkill({ zoneSize, title, subtitle, text, image, alt }) {
	var imageContent = '';
	var subtitleContent = '';
	var textContent = '';

	if (image) {
		imageContent = `
			<div class="icon d-flex justify-content-end">
				<img src="${image}" alt="${alt}">
			</div>
		`;
	}
	if (subtitle) {
		subtitleContent = `
			<h4>${subtitle}</h4>
		`;
	}
	if (text) {
		textContent = `
			<p>${text}</p>
		`;
	}

	return `
		<div class="col-12 ${zoneSize} block-col">
			<div class="skill-block default-bg border-box" data-aos="flip-left" data-aos-duration="800" data-aos-anchor-placement="center-bottom">
				${subtitleContent}
				<h3>${title}</h3>
				${textContent}
				${imageContent}
			</div>
		</div>
	`;
}
