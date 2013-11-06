(function () {
	"use strict";

	WinJS.UI.Pages.define("/pages/home/home.html", {
		// This function is called whenever a user navigates to this page. It
		// populates the page elements with the app's data.
		ready: function (element, options) {
			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,

				// Optional libraries used to extend on reveal.js
				dependencies: [
					{ src: '/vendor/reveal/lib/js/classList.js', condition: function () { return !document.body.classList; } },
					{ src: '/vendor/reveal/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
					{ src: '/vendor/reveal/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
					{ src: '/vendor/reveal/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
					{ src: '/vendor/reveal/plugin/zoom-js/zoom.js', async: true, condition: function () { return !!document.body.classList; } },
					{ src: '/vendor/reveal/plugin/notes/notes.js', async: true, condition: function () { return !!document.body.classList; } }
				]
			});

			Reveal.addEventListener('ready', function (event) {
				//This is a slight hack to enable highlighting. The reveal.js plugin attaches highlighting to the load event,
				//but that doesn't work in this case, since we are working with the equivalent of a single-page web app.
				hljs.initHighlighting();
			});
		}
	});
})();
