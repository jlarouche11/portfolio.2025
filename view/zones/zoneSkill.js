export default function ZoneSkill({ zoneSize, title, subtitle, text, image, alt }) {
	var imageContent = '';
	var subtitleContent = '';

	if (image) {
		imageContent = `
			<div class="icon d-flex justify-content-end mt-5">
				<img src="${image}" alt="${alt}">
			</div>
		`;
	}
	if (subtitle) {
		subtitleContent = `
			<h4>${subtitle}</h4>
		`;
	}

	return `
		<div class="col-12 ${zoneSize} block-col">
			<div class="skill-block default-bg border-box" data-aos="flip-left" data-aos-duration="800" data-aos-anchor-placement="center-bottom">
				${subtitleContent}
				<h3>${title}</h3>
				<p>${text}</p>
				${imageContent}
			</div>
		</div>
	`;
}
