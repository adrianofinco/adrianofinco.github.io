const isDevelopment = require('./devenv.js');

const htmlmin = require("html-minifier");
const Nunjucks = require("nunjucks");
const nunjucksEnvironment = new Nunjucks.Environment(
 new Nunjucks.FileSystemLoader("src/_includes"), { }
);

const linkClasses = "text-blue-600 hover:underline";
let translate = require("./src/_data/translate.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(true);

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  eleventyConfig.addPassthroughCopy({"./src/img": "./img",});

  eleventyConfig.addNunjucksFilter("language", function(key) {
    translation = translate[key];
    for (index in translation) {
      let parsed = translation[index]
          .replace(/\[([^><*]+?)\]\(([^><* ]+?)\)/g, `<a class="${linkClasses}" href="$2">$1</a>`)
          .replace(/\*\*([^><*]+?)\*\*/g, '<b>$1</b>')
          .replace(/href="http/g, 'target="_blank" href="http')
          .replace(/\n/g, '<br>\n')
          .replace(/\{([^><*].*?)\}(\(([^><*].+?)\))?/g, (match, p1, p2, p3) => {
            p3 = p3 !== undefined ? p3 : 'text-black';
            return `<b class="${p3}">${p1}</b>`;
          });
      translation[index] = nunjucksEnvironment.filters.safe(parsed);
    }
    return translation;    
  });

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