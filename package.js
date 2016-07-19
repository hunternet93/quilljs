Package.describe({
  name: 'hunternet93:quilljs',
  version: '1.0.0-beta.9',
  // Brief, one-line summary of the package.
  summary: 'Quill.js version 1.0.0-beta.9 for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hunternet93/quilljs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
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
