const htmlmin = require("html-minifier");

isDevelopment = require('./devenv.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(true);

  eleventyConfig.addPassthroughCopy({"./src/resume.pdf": "./resume.pdf",});
  eleventyConfig.addPassthroughCopy({"./src/curriculo.pdf": "./curriculo.pdf",});

  eleventyConfig.addPassthroughCopy({"./src/img": "./img",});

  // minify html
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (!isDevelopment && outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }

};