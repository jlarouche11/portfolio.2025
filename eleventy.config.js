const path = require('node:path');
const sass = require('sass');

// Components
const ZoneAbout = require('./view/zones/zoneAbout');
const ZoneValue = require('./view/zones/zoneValue');
const ZoneSkill = require('./view/zones/zoneSkill');
const ZoneProject = require('./view/zones/zoneProject');

// Configs
const relativeLinks = require('./config/relative-links.js');

module.exports = function (eleventyConfig) {
	eleventyConfig.addExtension('scss', {
		outputFileExtension: 'css',

		// opt-out of Eleventy Layouts
		useLayouts: false,

		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			// Don’t compile file names that start with an underscore
			if (parsed.name.startsWith('_')) {
				return;
			}

			let result = sass.compileString(inputContent, {
				loadPaths: [parsed.dir || '.', this.config.dir.includes]
			});

			// Map dependencies for incremental builds
			this.addDependencies(inputPath, result.loadedUrls);

			return async (data) => {
				return result.css;
			};
		}
	});

	eleventyConfig.addTemplateFormats('scss');

	eleventyConfig.addPassthroughCopy({ './ressources/fonts': 'ressources/fonts' });
	eleventyConfig.addPassthroughCopy({ './ressources/images': 'ressources/images' });
	eleventyConfig.addPassthroughCopy({ './ressources/files': 'ressources/files' });
	// eleventyConfig.addPassthroughCopy({ './ressources/js': 'ressources/js' });

	// Components réutilisable
	eleventyConfig.addShortcode('ZoneAbout', ZoneAbout);
	eleventyConfig.addShortcode('ZoneValue', ZoneValue);
	eleventyConfig.addShortcode('ZoneSkill', ZoneSkill);
	eleventyConfig.addShortcode('ZoneProject', ZoneProject);

	eleventyConfig.setLayoutsDirectory('view/master');

	eleventyConfig.addPlugin(relativeLinks);
};
