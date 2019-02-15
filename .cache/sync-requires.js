const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-template-js": hot(preferDefault(require("/Users/nick/Documents/Lambda/Labs/gatsby-labs-blog/src/templates/post-template.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/nick/Documents/Lambda/Labs/gatsby-labs-blog/src/templates/blog-template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nick/Documents/Lambda/Labs/gatsby-labs-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nick/Documents/Lambda/Labs/gatsby-labs-blog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nick/Documents/Lambda/Labs/gatsby-labs-blog/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/nick/Documents/Lambda/Labs/gatsby-labs-blog/src/pages/page-2.js"))),
  "component---src-pages-page-3-js": hot(preferDefault(require("/Users/nick/Documents/Lambda/Labs/gatsby-labs-blog/src/pages/page-3.js")))
}

