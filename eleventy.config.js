const path = require('node:path');
const sass = require('sass');

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
	eleventyConfig.addPassthroughCopy({ './ressources/js': 'ressources/js' });
	eleventyConfig.setLayoutsDirectory('view/master');
};
