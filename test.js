// { svg: true, ex: 8, cjkCharWidth: 18, linebreaks: true },
let options = { ex: 8,
  width: 100,
  useFontCache: true,
  useGlobalCache: false,
  linebreaks: true,
  equationNumbers: 'none',
  html: false,
  css: false,
  mml: false,
  svg: true,
  speakText: true,
  speakRuleset: 'mathspeak',
  speakStyle: 'default',
  timeout: 10000,
  cjkCharWidth: 18,
  format: 'inline-TeX' }
var md = require("markdown-it")().use(require("./index.js"), {
  renderingOptions: options
});

console.log(md.render("$$a_i e^2$$"));
// console.log(md.render("$$40,2$$"));
// .use(require('markdown-it-math') [, options = { svg: true, ex: 8, cjkCharWidth: 18, linebreaks: true }]);
