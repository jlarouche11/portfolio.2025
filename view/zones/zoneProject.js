import slugify from '@sindresorhus/slugify';

export default function ZoneProject({ title, description, languages, technologies, tasks, librairies, url, link, btnColor = 'btn-yellow', image }) {
	var descriptionContent = '';
	var languagesContent = '';
	var technologiesContent = '';
	var tasksContent = '';
	var librairiesContent = '';

	if (description) {
		descriptionContent = `
			<p>${description}</p>
		`;
	}
	if (languages) {
		languagesContent = `
			<div class="information">
				<span class="label">Langage(s) de programmation utilisé(s)</span>
				<p><strong>${languages}</strong></p>
			</div>
		`;
	}
	if (technologies) {
		technologiesContent = `
			<div class="information">
				<span class="label">Technologie(s) importante(s) au projet</span>
				<p><strong>${technologies}</strong></p>
			</div>
		`;
	}
	if (tasks) {
		tasksContent = `
			<div class="information">
				<span class="label">Tâche(s) accomplie(s)</span>
				<p><strong>${tasks}</strong></p>
			</div>
		`;
	}
	if (librairies) {
		librairiesContent = `
			<div class="information">
				<span class="label">Librairie(s) importante(s)</span>
				<p><strong>${librairies}</strong></p>
			</div>
		`;
	}

	return `
		<div class="col-12 col-lg-12 block-col">
			<div class="latest-project-block d-flex flex-column flex-xl-row default-bg border-box">
				<div class="contents order-2 order-xl-1">
					<h3 style="view-transition-name: project-${slugify(title)}-title;">${title}</h3>
					${descriptionContent}
					${languagesContent}
					${technologiesContent}
					${tasksContent}
					${librairiesContent}
					<div class="btns-group">
						<a href="${url}" class="btn ${btnColor}">Découvrez le projet <div class="block-icon"><i class="icon-arrow-right"></i></div></a>
					</div>
				</div>
				<div class="image position-relative order-1 order-xl-2">
					<img src="${image}" alt="${title}" class="img-bg fit-cover position-center" style="view-transition-name: project-${slugify(title)}-image;">
				</div>
			</div>
		</div>
	`;
}
