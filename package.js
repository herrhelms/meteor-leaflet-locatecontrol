Package.describe({
  name: 'herrhelms:meteor-leaflet-locatecontrol',
  summary: 'L.Control.Locate by @domoritz (minified v0.34.0) ported to meteor',
  version: '1.0.1',
  git: 'https://github.com/herrhelms/meteor-leaflet-locatecontrol.git'
});
Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	api.use(['fortawesome:fontawesome@4.2.0_2']);
  api.addFiles(['leaflet-locatecontrol.css','leaflet-locatecontrol.js'],'client');
});
