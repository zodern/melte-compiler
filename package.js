Package.describe({
  name: 'zodern:melte-compiler',
  version: '1.3.1',
  summary: 'Compiler used by zodern:melte',
  git: 'https://github.com/zodern/melte-compiler.git',
  documentation: 'README.md'
});

Npm.depends({
  'svelte-hmr': '0.14.9',
  'find-up': '3.0.0',
  htmlparser2: '3.10.1',
  'postcss': '7.0.17',
  'recast': '0.21.0',
  'periscopic': '2.0.3',
  'acorn': '8.7.0',
  '@babel/parser': '7.17.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.8.1');
  api.use('ecmascript@0.12.7');
  api.use('caching-compiler@1.2.1', 'server');
  api.use('babel-compiler@7.3.4', 'server');

  api.mainModule('hmr-runtime.js', 'client', { lazy: true });
});
