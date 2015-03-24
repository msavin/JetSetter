Package.describe({
  name:    'msavin:jetsetter',
  summary: 'Visual Get/Set Tool for Sessions',
  version: '0.4.0',
  git:     'https://github.com/msavin/JetSetter.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {

  var clientFiles = [
  	"client/JetSetter.html",
    "client/functions.js",
    "client/JetSetter_create.html",
    "client/JetSetter_editor.html",
    "client/JetSetter_header.html",
    "client/JetSetter_create.js",
    "client/JetSetter_editor.js",
    "client/JetSetter_header.js",
    "client/JetSetter_row.html",
  	"style/JetSetter.css",
    "client/JetSetter_row.js",
    "client/JetSetter_editor.js",
  	"client/JetSetter.js"
  ];

  api.versionsFrom('1.0');
  api.use(['templating','tracker','session'], 'client');
  
  api.use('meteortoys:toykit@0.2.1');
  api.add_files(clientFiles, "client");

  if (api.export) {
    api.export('JetSetter', "client");
  }
  
  
});