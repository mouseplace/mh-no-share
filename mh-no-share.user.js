// ==UserScript==
// @name         🐭️ MouseHunt - No Share Buttons
// @version      1.0.5
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
	addStyles.innerHTML = `.actionportfolio,
	.canShare .larryTip,
	.canShare,
	.journalactions a[data-share-type="journal"],
	.journalactions a[data-type="journal"],
	.pageSidebarView .fb-page,
	.socialLink,
	*[src="https://www.mousehuntgame.com//images/ui/buttons/share_green.gif"],
	#jsDialog-publishToOwnWall {
		display: none;
	}

	#OnboardArrow.onboardPopup.canShare .closeButton {
		left: 0;
	}

	.pageFrameView {
		grid-template-columns: [first] auto [content-start] 760px [content-end] auto [last];
	}`;
	document.head.appendChild(addStyles);
})());
