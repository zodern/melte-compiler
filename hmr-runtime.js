var proxyAdapter = require('svelte-hmr/runtime/proxy-adapter-dom.js');
var makeApplyHmr = require('svelte-hmr/runtime').makeApplyHmr;

module.exports = {
  proxyAdapter: proxyAdapter,
  makeApplyHmr: makeApplyHmr
};
