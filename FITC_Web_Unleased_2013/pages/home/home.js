(function () {
	"use strict";

	WinJS.UI.Pages.define("/pages/home/home.html", {
		// This function is called whenever a user navigates to this page. It
		// populates the page elements with the app's data.
		ready: function (element, options) {
			Reveal.initialize({
				height: '90%',
				width: '90%',
				controls: true,
				progress: true,
				history: true,
				center: false,
				transition: 'linear',

				// Optional libraries used to extend on reveal.js
				dependencies: [
					{ src: '/vendor/reveal/lib/js/classList.js', condition: function () { return !document.body.classList; } },
					{ src: '/vendor/reveal/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } }
				]
			});

			Reveal.addEventListener('ready', function (event) {
				//This is a slight hack to enable highlighting. The reveal.js plugin attaches highlighting to the load event,
				//but that doesn't work in this case, since we are working with the equivalent of a single-page web app.
				hljs.initHighlighting();
			});

			var appBar = document.getElementById("commandsAppBar").winControl;
			appBar.getCommandById('cmdReset').addEventListener("click", function() {
				Reveal.slide(0, 0);
			}, false);
		}
	});
})();
