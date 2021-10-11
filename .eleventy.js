const svgContents = require('eleventy-plugin-svg-contents')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'images/favicons': '/' })
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('sitemap.xml')

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
