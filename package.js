Package.describe({
  name: 'hunternet93:quilljs',
  version: '1.1.0',
  summary: 'Quill.js version 1.1.0 for Meteor',
  git: 'https://github.com/hunternet93/quilljs',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.export('Quill', 'client');
  api.addFiles('quill/quill.min.js', 'client');
  api.addFiles('export.js', 'client');
  api.addFiles('quill/quill.css', 'client');
  api.addFiles('quill/quill.base.css', 'client');
  api.addFiles('quill/quill.snow.css', 'client');
  api.addFiles('quill/quill.bubble.css', 'client');
});
