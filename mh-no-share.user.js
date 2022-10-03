// ==UserScript==
// @name         🐭️ MouseHunt - No Share Buttons
// @version      1.0.0
// @description  Remove the "Share" buttons that prompt you to share on Facebook.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://brrad.com/mouse.png
// @grant        none
// @run-at       document-end
// ==/UserScript==
((function () {
	'use strict';

	const addStyles = document.createElement('style');
	addStyles.innerHTML = `
	.journalactions a[data-share-type="journal"],
	.journalactions a[data-type="journal"],
	*[src="https://www.mousehuntgame.com//images/ui/buttons/share_green.gif"],
	.socialLink,
	.pageSidebarView .fb-page
	.communityGroupView-ad {
		display: none;
	}`;
	document.head.appendChild(addStyles);
})());
