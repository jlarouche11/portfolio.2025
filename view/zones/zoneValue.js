export default function ZoneValue({ zoneSize, icon, iconColor = 'yellow', title, text }) {
	var iconContent = '';

	if (icon) {
		iconContent = `
			<i class="${icon} ${iconColor}"></i>
		`;
	}

	return `
		<div class="col-12 ${zoneSize} block-col">
			<div class="value-block d-flex align-items-center justify-content-center flex-column text-center">
				${iconContent}
				<p><strong>${title}</strong></p>
				<p>${text}</p>
			</div>
		</div>
	`;
}
