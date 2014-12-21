Package.describe({
  name: 'herrhelms:meteor-leaflet-locatecontrol',
  summary: 'L.Control.Locate by @domoritz ported to meteor',
  version: '1.0.0',
  git: 'https://github.com/herrhelms/meteor-leaflet-locatecontrol.git'
});
Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
	var images = [
		"images/locate.png",
		"images/locate@2x.png",
		"images/spinner.gif",
		"images/spinner@2x.gif",
	];
  api.add_files(images,"client");
  api.addFiles(['leaflet-locatecontrol.css','leaflet-locatecontrol.js'],'client');
});
