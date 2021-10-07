const svgContents = require('eleventy-plugin-svg-contents')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('robots.txt')

  eleventyConfig.addPlugin(svgContents)

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css',
  })

  return {
    dir: {
      input: 'src',
    },
  }
}
