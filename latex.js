(function() {
	var scripts = document.getElementsByTagName('script');
	var matchedScripts = [];
	var link = null;
	var i;
	for (i = scripts.length; i--;) {
		var src = scripts[i].src;
		if (!src) {
			continue;
		}
		if (!link) {
			link = document.createElement('a');
		}
		link.href = src;
		if (link.host !== 'subzey.github.io' || link.pathname !== '/sampleembed/latex.js') {
			continue;
		}
		matchedScripts.push(scripts[i]);
	}
	for (i = matchedScripts.length; i--;) {
		var img = document.createElement('img');
		img.src = 'http://latex.codecogs.com/gif.latex?' + encodeURIComponent(matchedScripts[i].innerHTML.trim());
		matchedScripts[i].parentNode.replaceChild(img, matchedScripts[i]);
	}
})();