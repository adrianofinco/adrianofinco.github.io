const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(true);

  eleventyConfig.addPassthroughCopy({"./src/img": "./assets/img",});

  eleventyConfig.addPassthroughCopy({"./src/js/app.js": "./assets/app.js",});

  eleventyConfig.addPassthroughCopy({"./node_modules/vue/dist/vue.min.js": "./assets/vue.js",});

  eleventyConfig.addShortcode("version", function () { return String(Date.now()); });

  // minify html
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
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